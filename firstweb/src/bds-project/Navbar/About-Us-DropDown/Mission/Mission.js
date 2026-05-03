
import Component from './Component/Component';

function Mission(){
     const Mdata = {
    title: "Mission",
    subtitle: "Mission",
    btext:'“Where Values Blossom, Minds Flourish, and Hearts Thrive.”',
    ptext:`At BDS International School, pride is taken in an unwavering commitment to values deeply rooted in tradition while embracing a modern outlook. The school doesn't just educate students; it cultivates well-rounded individuals who are not only academically sound but also compassionate, ethical, and prepared for success.'`,
    ptext1:'The mission of BDS International School is to inspire students to excel academically and become exemplary human beings. The school believes in the profound philosophy of “VasudhaivaKutumbakam,” where the world is seen as one family. This belief shapes the approach to education, as our School endeavors to prepare students to be responsible global citizens.',
    ptext2:'Success is not solely measured by academic achievements. Hence, the focus extends beyond textbooks to encompass holistic personality development. Our School empowers students to think critically, communicate effectively, and embrace the values that will guide them toward a bright and prosperous future.',
    ptext3:'Join BDS International School on this transformative journey, where the gap between tradition and modernity is bridged, nurturing individuals who aspire to be academically strong, culturally rooted, and globally aware.',
    img:'https://bdsinternationalschool.net/images/aboutus1.jpg'
  };

    return(
      <div>
        < Component data={Mdata}/>

      </div>
    )

}

export default Mission;