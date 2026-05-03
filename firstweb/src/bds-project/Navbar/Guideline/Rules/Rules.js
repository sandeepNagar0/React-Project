import Component from "../../About-Us-DropDown/Mission/Component/Component";

function Rules(){
    const Rdata={
        title:'School Rules',
        subtitle:'School Rules',
        ptext:`1. Punctuality is essential, and students are expected to arrive on time; late entry will not be permitted after 5 minutes of the school's commencement time.`,
        ptext1:`2. Students suffering from infectious or contagious diseases will not be permitted to attend school until fully recovered.`,
        ptext3:`3. Fee can be deposited on quarterly basis by 15th day of the first month of that quarter. If fee is not deposited before the due date, late fee of ₹1000 /- will be charged per month as late fee.If fee and fine are not paid for three consecutive months, the name of the student will be struck off the rolls without giving any notice.`,
        ptext4:`4. The use of kajal, mehndi, and other forms of ornamentation, including jewelry or expensive watches, use of makeup, hair gel, hair colour, fancy accessories for hair, and other kinds of accessories, and tattoos are strictly prohibited.`,
        ptext5:`5.Students are not permitted to leave their classrooms without obtaining a class outpass issued by the school authorities.`,

        img:'https://bdsinternationalschool.net/images/aboutus1.jpg',

        ptext6:`6. Students are not allowed to meet visitors during school hours, and tiffin boxes, bottles, or medicines will not be delivered to students under any circumstances.`,
        ptext7:`7. Posting derogatory remarks or photographs on social media platforms is strictly prohibited and may lead to termination from the school`,
        ptext8:`8. The school shall not be held liable for any unforeseen accidents, illnesses, or mishaps occurring within the school premises or during school trips.`,
        ptext9:`9. Effective communication is essential, and students are expected to converse in English during school hours and while using the school bus; parental cooperation is appreciated in promoting English language skills.`,
        ptext10:`10. The Principal's decision regarding promotion or detention is final and binding.`,
        ptext11:`11. Students availing the school transport service must adhere to the rules and regulations; transport fees are charged for 12 months, and the service cannot be discontinued mid-session.`,

    }
    return(
        <div>
            <Component data={Rdata}/>
        </div>
    )
}

export default Rules;
