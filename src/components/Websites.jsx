import React, {Component} from 'react';

class Websites extends Component{
    constructor(){
        super();
        this.state = {
            websites: [
                {name: "Seytech Portal", 
                link: "https://learn.seytech.co/courses",
                desc: 'Our interactive learning and tracking platform.'},
                {name: "FreeCodecamp", 
                link: "https://www.freecodecamp.org/",
                desc: "Online interactive platform that offers free coding classes."},
                {name: "Codeacademy", 
                link: "https://www.codecademy.com/learn",
                desc: "Online interactive platform that offers free coding classes in 12 different programming languages."},
                {name: "Stack Overflow", 
                link: "https://stackoverflow.com/search?q=how+to+import+css++into+html",
                desc: "Stack Overflow is a question and answer site for professional and enthusiast programmers."},
                {name: "Medium", 
                link: "https://medium.com/better-programming/top-10-programming-blogs-in-2020-dda86feead1f",
                desc: 'A website to read blogs about programming.'},
                {name: "Quora", 
                link: "https://www.quora.com/",
                desc: "A website to read blogs about almost anything."},
                {name: "Youtube", 
                link: "https://www.youtube.com/results?search_query=html+learning+projects",
                desc: "Tutorial to follow and practice."}
            ]
        }
    }

    render(){
        const content = this.state.websites.map(el=>{
            return(
                <tr>
                    <td><a target="_blank" rel='noreferrer' href={el.link}>{el.name}</a></td>
                    <td>{el.desc}</td>
                </tr>
            )
        })
        return (
            <main>
            <h1>Websites to follow:</h1>
            <table border="1">
                <tr>
                    <th>Websites</th>
                    <th>Description</th>
                </tr>
                {content}
            </table>
        </main>
        )
    }
}

export default Websites;