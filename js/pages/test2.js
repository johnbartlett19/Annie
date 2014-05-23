
var page_name = 'test2';

var text_string_01 = 'This is a text block to simulate the random thoughts produced at the end of the day as an introduction' +
    ' to the set of pictures likely to follow.';

var text_string_02 = 'This is a second text block with a description that covers the following one or few blocks of ' +
    'pictures and comments.  This is the second test page';

var row_data = [
    ['picblk', [
        [page_name, '#one', "P5210013a.JPG", "pic01 comment for first picture"]
    ]
    ],
    ['text', [
        [text_string_01]
    ]
    ],
    ['picblk', [
        [page_name, '#one', "P5210014.jpg", "pic02 comment for first picture"],
        [page_name, '#one', "P5210015.jpg", "pic02 comment for second picture"]
    ]
    ],
    ['picblk', [
        [page_name, '#one', "P5210016.jpg", "pic03 comment for first picture"],
        [page_name, '#one', "P5210019.jpg", "pic03 comment for second picture that drags on and on and takes many lines on the page what happens?"],
        [page_name, '#one', "P5210023.jpg", "pic03 comment for third picture"]
    ]
    ],
    ['text', [
        [text_string_02]
    ]
    ],
    ['picblk', [
        [page_name, '#one', "P5210027.jpg", "pic04 comment for first picture"],
        [page_name, '#one', "P5210032.jpg", "pic04 comment for second picture"],
        [page_name, '#one', "P5210039.jpg", "pic04 comment for third picture"],
        [page_name, '#one', "P5210042.jpg", "pic04 comment for fourth picture"]
    ]
    ]
];

update_row_data(row_data);
