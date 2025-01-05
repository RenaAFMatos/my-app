import Mario_Adrian_A from '../../assets/images/Mario and Adrian A.jpg';
import Mario_Adrian_B from '../../assets/images/Mario and Adrian b.jpg';

function Chicago() {
  return (
    <div className='chicago'>
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
        enim velit mollit.
      </p>
      <img src={Mario_Adrian_A} alt="Chicago" className='chicago-photo-a'/>
      <img src={Mario_Adrian_B} alt="Chicago" className='chicago-photo-b'/>
    </div>
  );
}

export default Chicago;
