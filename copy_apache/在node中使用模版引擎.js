const template = require('art-template');

const res = template.render('hello {{ name }}', {
    name: 'Durant'
})

console.log(res)