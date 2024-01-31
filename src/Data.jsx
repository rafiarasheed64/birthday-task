import React,{useState} from 'react'
const arrdata = [
    {
      id: 1,
      name: 'Lilac',
      date: 1,
      month: 'January',
      year: 2001,
      age: 22,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHH3fygB_cZ8slbevg5TGj6_M3XXc9Jz0UwpfpZ4hgtA&s',
    },
    {
      id: 2,
      name: 'Areeba',
      date: 10,
      month: 'February',
      year: 2001,
      age: 32,
      image:'https://nainblog.com/wp-content/uploads/2023/05/32447865c320a281a5d439809d239fa5.jpg',
    },
    {
      id: 3,
      name: 'Alisha',
      date: 1,
      month: 'January',
      year: 2001,
      age: 36,
      image:'https://images.unsplash.com/photo-1491616569293-e27f7f4cd41a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFjayUyMG9mJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 4,
      name: 'Amna',
      date: 1,
      month: 'January',
      year: 2001,
      age: 34,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeh68ifgdpcELfYelzl5m0iXsRVFe4N98CvA&usqp=CAU',
    },
    {
      id: 5,
      name: 'Fatima',
      date: 22,
      month: 'June',
      year: 2001,
      age: 29,
      image:'https://www.nainblog.com/wp-content/uploads/2023/05/57943b794013071255e3fc37c6736005.jpg',
    }
  ]
  function List({people}) {
    return (
      <div>
        {people.map(e => {
          const { id, name, age, image, date, month } = e;
          return (
            <div key={id} style={{border: '1px solid',backgroundColor: 'pink', display: 'flex',alignItems:'center'}}>
              <img style={{height: '70px',width:'70px'}}  src={image} alt="" />
              <div style={{marginLeft:'20px'}}>
                <h4>{name}</h4>
                <p>{age} years</p>
                <p>Date of Birth: {date} {month}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
}
const getMonthIndex = month => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    return monthNames.findIndex(m => m === month);
  };
const Data = () => {
    const [people, setPeople] = useState(arrdata);
    const filterByNextWeekBirthday = () => {
    const currentdata = new Date();
    console.log(currentdata, 'current date');
    const datefrom1970 = new Date().getDate();
    console.log(datefrom1970, "7678878977558");
    const nextWeekDate = new Date(currentdata.getTime() + 7 * 24 * 60 * 60 * 1000).getDate();
    console.log(nextWeekDate, "Next Week Date");
    const filteredPeople = arrdata.filter((e) => {
      console.log(e);
      const personBirthday = new Date(e.year,getMonthIndex(e.month), e.date).getDate();
      console.log(personBirthday);
      return personBirthday >= datefrom1970 && personBirthday <= nextWeekDate;
    });
    setPeople(filteredPeople);
  };
  
  
  return (
      <div style={{width: '300px'}}>
        <h1>BIRTHDAY</h1>
        <List people={people}/>
        <button style={{padding:'10px',backgroundColor: 'skyblue',width:'100%'}} onClick={()=>{setPeople([])}}>CLEAR ALL</button>
        <button style={{padding: '10px',backgroundColor: 'skyblue',width:'100%'}} onClick={filterByNextWeekBirthday}>FILTERED BIRTHDAY</button>

    </div>
  )
}


export default Data