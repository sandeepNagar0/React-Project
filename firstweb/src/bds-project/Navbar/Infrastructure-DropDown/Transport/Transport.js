import Component from "../../About-Us-DropDown/Mission/Component/Component";

function Transport(){

    const Tdata={
        title:'Transport',
        subtitle:'Transport',
        ptext:'The BDS International School is providing an entirely facilitated bus services covering the entire city of Meerut with varied stops at regular and punctual time intervals for picking up students and teachers."',
        ptext1:'The School transportation is provided with the following facilities lay down by CBSE norms and RTO department.',
        ptext2:'School buses are spacious with a necessary capacity to accommodate students',
        ptext3:'The students in school buses are accompanied by teachers and well-trained attendants/ escorts to ensure their safety & to confirm adequate discipline .',
        ptext4:'School bus drivers are accountable to pick & drop the children to their respective stops around an hour of the school starting and getting over',
        ptext5:'For ensuring further safety of our students, buses are installed with speed limit set at 40kms/hr.',
        img:'https://bdsinternationalschool.net/InfraImages/15bus.jpg'

    }
    return(
        <div>
            <Component data={Tdata}/>

        </div>
    )
}

export default Transport;