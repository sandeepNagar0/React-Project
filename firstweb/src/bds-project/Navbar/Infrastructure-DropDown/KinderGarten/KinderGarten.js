import Component from "../../About-Us-DropDown/Mission/Component/Component";
function KinderGarten(){
     const kdata = {
    title: "Kindergarten",
    subtitle: "Kindergarten",
    btext:'“Children are not things to be molded, but are people to be unfolded.”',
    ptext:'Our kindergarten not only prepares children for what will come later in life but cares for them while they are there. The little angels are taught in a child-like way by the unmatched fortitude of teachers. The basic amenities to educate little ones by recreational means and modern technologies. Toys variegated and multi-colored walls and corridors tempt them to learn by play way method.',
    img:'https://bdsinternationalschool.net/image/kindergarten.webp'
    

  };
    return(
        <div>
            <Component data={kdata} />
            
        </div>
    )
}

export default KinderGarten;