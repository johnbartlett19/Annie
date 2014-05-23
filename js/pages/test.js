
var page_name = 'test';

var text_string_01 = 'This is a text block to simulate the random thoughts produced at the end of the day as an introduction' +
    ' to the set of pictures likely to follow.';

var text_string_02 = 'This is a second text block with a description that covers the following one or few blocks of pictures and comments';

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

update_row_data(row_data);
