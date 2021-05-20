import React, { Component} from 'react';

class MyChoices extends Component {
    constructor(){
        super();
        this.state = {
            editor: [
                {title: 'Code Editors', 
                  list: [
                        {href: "https://atom.io/", name: 'Atom'},
                        {href: "https://code.visualstudio.com/", name: 'VS Code'},
                        {href: "https://www.sublimetext.com/", name: 'Sublime'}
                        ]
                },
                {title: 'Version Control Systems', 
                  list: [
                        {href: "https://git-scm.com/", name: 'Git'},
                        {href: "http://subversion.apache.org/", name: 'SVN'}
                        ]
                },
                {title: 'Version end asset', 
                  list: [
                        {href: "https://fonts.google.com/", name: 'Google Fonts'},
                        {href: "https://fontawesome.com/", name: 'Font Awesome'}
                        ]
                },
                {title: 'Front end frameworks', 
                  list: [
                        {href: "https://getbootstrap.com/", name: 'Bootstrap'},
                        {href: "https://material-ui.com/", name: 'Material UI'}
                        ]
                },
                {title: 'SS preprocessor', 
                  list: [
                        {href: "https://sass-lang.com/", name: 'SASS'},
                        {href: "http://lesscss.org/", name: 'LESS'}
                        ]
                },
                {title: 'Javascript Frameworks / Libraries', 
                  list: [
                        {href: "https://reactjs.org/", name: 'React'},
                        {href: "https://angularjs.org/", name: 'Angular'},
                        {href: "https://vuejs.org/", name: 'Vue.js'},
                        {href: "https://jquery.com/", name: 'jQuery.'}
                        ]
                },
                {title: 'Developer Tools', 
                  list: [
                        {href: "https://developers.google.com/web/tools/chrome-devtools", name: 'Chrome Dev Tools'},
                        {name: 'Firefox Web Inspector'},
                        {name: 'Safari Web Inspector'}
                        ]
                },
                {title: 'Online Coding Environments', 
                  list: [
                        {href: "https://codepen.io", name: 'Codepen'},
                        {href: "https://repl.it/", name: 'Repl'}
                        ]
                },
                {title: 'Other Tools:', 
                  list: [
                        {name: 'Terminal'},
                        {name: 'Github'}
                        ]
                }
              ]
        }
    }

    render(){
        const content = this.state.editor.map(el => {
            return (
              <>
              <li>{el.title}
                      <ul>
                        {el.list.map(li => <li><a target="_blank" rel='noreferrer' href={li.href}>{li.name}</a></li>)}
                      </ul>
                  </li>
              </>
            )
          })
    return (
        <main>
        <h1>My choices for web development tools</h1>

        <ol>
            {content}
        </ol>
    </main>
    )
    }
}

export default MyChoices;