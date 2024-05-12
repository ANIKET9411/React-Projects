import "./Skills.css"
function Skills(){
    let skill=[{
        image:"https://portfolioo-green.vercel.app/static/media/html.2ba4fabc69a89a8f71e6.png",
        name:"HTML",
        styles:{
            bgColor:"red"
        }
    },{
        image:"https://portfolioo-green.vercel.app/static/media/css.69a82c2d9e45c933a9cb.png",
        name:"CSS"
    },{
        image:"https://portfolioo-green.vercel.app/static/media/javascript.1ccd6ef9bb1f9c84ef00.png",
        name:"JavaScript"
    },{
        image:"https://portfolioo-green.vercel.app/static/media/react.0cf951a69d8e58f83f9d.png",
        name:"React"
    },{
        image:"https://portfolioo-green.vercel.app/static/media/github.3b9e32903aa89111875d.png",
        name:"GitHub"
    },{
        image:"	https://portfolioo-green.vercel.app/static/media/html.2ba4fabc69a89a8f71e6.png",
        name:"Tailwinds"
    }];
    return (
        <div className="skills_main">
            <h1>SKILLS</h1>
            <div className="skills_main_inner">
                {skill.map((ele)=>{
                    return <div className="SKILL">
                        <img src={ele.image} />
                        <h3>{ele.name}</h3>
                    </div>
                })}
            </div>
        </div>
    )
}
export default Skills;