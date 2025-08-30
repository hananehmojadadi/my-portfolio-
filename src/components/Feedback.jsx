// import React, { useState } from "react";
// import "./Feedback.css";

// const Feedback = () => {
//   const [feedbacks, setFeedbacks] = useState([]);
//   const [form, setForm] = useState({ name:"", rating:5, comment:"" });

//   const handleChange = e => setForm({...form,[e.target.name]:e.target.value});

//   const handleSubmit = e => {
//     e.preventDefault();
//     setFeedbacks([form,...feedbacks]);
//     setForm({name:"",rating:5,comment:""});
//   };

//   return (
//     <section className="feedback" id="feedback">
//       <h2>Visitor <span>Feedback</span></h2>
//       <form className="feedback-form" onSubmit={handleSubmit}>
//         <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required/>
//         <select name="rating" value={form.rating} onChange={handleChange}>
//           {[5,4,3,2,1].map(n=><option key={n} value={n}>{n} Stars</option>)}
//         </select>
//         <textarea name="comment" value={form.comment} onChange={handleChange} placeholder="Comment" required/>
//         <button type="submit">Submit Feedback</button>
//       </form>

//       <div className="feedback-wall">
//         {feedbacks.map((fb, idx)=>(
//           <div className={`feedback-card ${fb.rating===5?'featured':''}`} key={idx}>
//             {fb.rating===5 && <span>🌟 Featured</span>}
//             <h4>{fb.name}</h4>
//             <p>Rating: {fb.rating}</p>
//             <p>{fb.comment}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Feedback;