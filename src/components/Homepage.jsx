import React, { Component} from 'react'

class Homepage extends Component {
    constructor(){
        super();
        this.state = {
            list: ['Learning HTML/CSS', 'Learning Javascript', 'Learning React', 'Finding a Software engineering job']
        }
    }
    render(){
        const orderedList = this.state.list.map(el=><li>{el}</li>)
        return (
            <main>
                <img width="200px" src="https://media-exp1.licdn.com/dms/image/C4E03AQHQKH7-HZzwbA/profile-displayphoto-shrink_400_400/0/1612480976274?e=1626912000&v=beta&t=bZudrPGDXM8lJ8IUzSR6IsLLv9FAi6Uciu4qWVsWViQ" alt="Profile picture"/>
                <h1>Anna Perminova</h1>

                <p>Seytech student, web developer - <strong>software engineer</strong>. Thanks for visiting my site. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus in amet officia molestias id, omnis earum culpa eius neque sit. Sed vero, id quidem tenetur nesciunt quod nobis consectetur fugit? List of things I'm learning: <strong>HTML, CSS, Javascript, React</strong></p>
                <h3>About me</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos in aliquam eaque. Aspernatur vitae doloribus ducimus repellendus quisquam, cupiditate nesciunt minima sunt, sit, quia cum. Ducimus neque porro reiciendis. Lorem ipsum dolor, large sit amet consectetur adipisicing elit. Deleniti quae, officia rerum nulla, consequuntur odit nobis neque repellat illum eius ipsam distinctio qui amet quisquam? Et inventore sunt modi repellendus.</p>
            
                <h3>My goals</h3>

                <ol>
                    {orderedList}
                </ol>
            </main>
        )
    }
}

export default Homepage;