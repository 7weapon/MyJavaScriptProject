/**
 * Created by zybang on 2016/5/30.
 */
"use strict";

const tmpl = arr =>`
    <table>
        ${arr.map(item=>`
            <tr>${item.first}</tr>
            <tr>${item.last}</tr>
        `).join('')}
    </table>
`;


const data = [
    {first: "<Jane>", last: "Bond"},
    {first: "Lars", last: "<Croft>"}
];

console.log(tmpl(data));