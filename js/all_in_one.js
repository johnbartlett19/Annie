
var page_name = 'test';
//var page_name fullPath.replace(/^.*[\\\/]/, '');  
var text_string_01 = 'This is a text block to simulate the random thoughts produced at the end of the day as an introduction' +
    ' to the set of pictures likely to follow.'

var text_string_02 = 'This is a second text block with a description that covers the following one or few blocks of pictures and comments'

var row_data = [
    ['picblk', [
        [page_name, '#one', "P5200001.jpg", "pic01 comment for first picture"]
    ]
    ],
    ['text', [
        [text_string_01]
    ]
    ],
    ['picblk', [
        [page_name, '#one', "P5200019.jpg", "pic02 comment for first picture"],
        [page_name, '#one', "P5200026.jpg", "pic02 comment for second picture"]
    ]
    ],
    ['picblk', [
        [page_name, '#one', "P5200027.jpg", "pic03 comment for first picture"],
        [page_name, '#one', "P5200029.jpg", "pic03 comment for second picture that drags on and on and takes many lines on the page what happens?"],
        [page_name, '#one', "P5210002.jpg", "pic03 comment for third picture"]
    ]
    ],
    ['text', [
        [text_string_02]
    ]
    ],
    ['picblk', [
        [page_name, '#one', "P5210003.jpg", "pic04 comment for first picture"],
        [page_name, '#one', "P5210006.jpg", "pic04 comment for second picture"],
        [page_name, '#one', "P5210010.jpg", "pic04 comment for third picture"],
        [page_name, '#one', "P5210011a.jpg", "pic04 comment for fourth picture"]
    ]
    ]
];

// this script adds the three indicies on the end of the row_data arrays (big index, little index, length)
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

// hold off on this stuff and see if I really need it.  May not need to be asynchronous.
var RowDataF = function (fun_row_data) {
    this.f_row_data = fun_row_data;
    return this
};

//TODO here is an example of a for-each in Java that could be used to do the one-two-three in a single routine
//var list = "<% _.each(people, function(name) { %> <li><%= name %></li> <% }); %>";
//_.template(list, {people: ['moe', 'curly', 'larry']});
//=> "<li>moe</li><li>curly</li><li>larry</li>"

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

