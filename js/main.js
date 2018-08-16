// Vue.component('todo-item',{
//     // component要在new vue对象之前定义
//     props: ['todo'],
//     template: '<li>{{ todo.name }}</li>'
// });
// let app = new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello Vue!',
//         seen: true,
//         items: [
//             { id: 0, name: 'Iphone X plus' },
//             { id: 1, name: 'Iphone 6' },
//             { id: 2, name: 'Samsung S9' },
//             { id: 3, name: 'Sony NZ2' }
//         ]
//     },
//     methods: {
//         reverseMessage: function () {
//             this.message = this.message.split('').reverse().join('');
//         }
//     }
// });
// app.message = 'I have changed the data!';
// app.seen = false;
// app.items.push({ name: 'Redmi Note 4X' });
var app = new Vue ({
    el: '#app',
    data: {
        homepage: '#',
        name: 'moshanyang',
        email: 'moshanyang@gmail.com',
        github: 'https://github.com/SY0UYUs',
        footbarmsg: 'by SY0UYU'
    }
});
