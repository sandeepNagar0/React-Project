import Component from "../../About-Us-DropDown/Mission/Component/Component";
function SchoolLibrary(){
     const Sdata = {
    title: "School Library",
    subtitle: " School Library",
    btext:'"Libraries store the energy that fuels the imagination. They open up windows to the world and inspire us to explore and achieve, and contribute to improving our quality of life."',
    ptext:'The Library is well stocked with a plethora of academic and non-academic content to serve the objectives, it is a wonderland of books where children are facilitated to make friends with books. Its simple child-friendly arrangement & open access to books cater to varied reading tastes enabling children to develop a reading habit, which in turn aids them in vocabulary advancement, accurate grammar practice, sentence formation, spellings & developing creative writing skills.',
    img:'https://bdsinternationalschool.net/image/library.webp'

  };
    return(
        <div>
            <Component data={Sdata}/>
            
        </div>
    )
}

export default SchoolLibrary;