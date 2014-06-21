/* These are routines associated with building a page of thumbnails.  There are two types of rows, a text block
     row and a picture row.  A text block row takes up full width and just reproduces the text provided in the row_data
     array.  A picture block builds a table with a picture and caption.  Picture blocks are either 1, 2, 3 or 4
     pictures wide, dependent only on the size of the array.  This code determines how wide the block will be
     and inserts the appropriate table and div's to accomodate that many entries.
 */

// this script adds the three indicies on the end of the row_data arrays (big index, little index, length)
function update_row_data(row_data) {
    for (var big = 0; big < row_data.length; big++) {
        if (row_data[big][0] != 'text') {
            for (var small = 0; small < row_data[big][1].length; small++) {
                var add_on = [
                    [big, small, row_data[big][1].length]
                ];
                row_data[big][1][small] = row_data[big][1][small].concat(add_on);
            }
        }
    }
}

// turn row data into function for _.template
var RowDataF = function (fun_row_data) {
    this.f_row_data = fun_row_data;
    return this
};

// these are the template bits for building picture row and text blocks
text_html = '<div class="textrow"><div><%= f_row_data %></div></div>';
pic_start = '<div class="picrow"><table><tr>';
pic_end = '</tr></table></div>';
pic_html = '<td><div class="pic"><table><tr><a href="<%=f_row_data[1]%>/<%=f_row_data[4]%>">' +
    '<img src="img/<%=f_row_data[0]%>/Small/<%=f_row_data[2]%>"></a></tr>' +
    '<tr><div><%=f_row_data[3]%></div></tr></table></div></td>'

// This takes the row data, does template translations and inserts HTML into the page
var run_subs = function (this_row_data) {
    var sub_content_div = $('div#sub-content');
    // here is the outside loop, determines how many sets of data or picture-rows on the page
    for (var item = 0; item < this_row_data.length; item += 1) {
        //pick off the first item to determine the type
        var insert_type = this_row_data[item][0];
        //pick off the second item (array) wtih the contents
        var insert_data = this_row_data[item][1];
        // check which type and action accordingly
        if (insert_type == "text") {
            template = _.template(text_html, RowDataF(insert_data[0]));
        }
        else if (insert_type == 'picblk') {
            var template = pic_start;
            for (var pic_cnt = 0; pic_cnt < insert_data.length; pic_cnt++) {
                template += _.template(pic_html, RowDataF(insert_data[pic_cnt]));
            }
            template += (pic_end);
        }
        else {
            alert('Found bad type in row_data: ' + insert_type)
        }
        sub_content_div.html(sub_content_div.html() + '<div id=temp_div_' + item + '>');
        //var content = _.template(template, RowDataF(this_row_data[item][1]));
        $(template).appendTo(sub_content_div);
        //$( "<p>Test</p>" ).appendTo( ".inner" );

    }
};

var one_template = function (data_set) {
    $.get("html/one_img.htm").done(function papa (data) {
            one_template = _.template(data, RowDataF(data_set));
        }
    )
};

var next_one = function(old_set) {
    var temp_set = jQuery.extend([], old_set)
    temp_set[1] = (temp_set[1] + 1) % temp_set[2];
    return(temp_set);
};

var prev_one = function(old_set) {
    var temp_set = jQuery.extend([], old_set)
    temp_set[1] = (temp_set[1] - 1) % temp_set[2];
    return(temp_set);
};
