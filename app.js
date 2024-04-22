// //    ----Check N Check----
// const c1 = document.getElementById('react-container');
// ReactDOM.render("Hello! Welcome to React",c1);


// //    -----function Component-----
// const Container = () =>{
//     return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning`,
//        React.createElement(`div`,null,`Let's rock and roll`)
//        );
// }
// const c2 = document.getElementById('react-container');
// ReactDOM.render(React.createElement(Container),c2);

// //   ------Class Component------
// class ReactContainer extends React.Component{
//       render(){
//           return React.createElement(`div`,null,`Hey Kalvians`,
//           React.createElement(`div`,null,`Let's rock and roll with classes`)
//           );
//       }
//   }
//   const c3 = document.getElementById('react-container');
//   ReactDOM.render(React.createElement(ReactContainer),c3)

//      -------babel-----
// class ReactContainer extends React.Component {
//     render() {
//       return (
//         <div>
//           Hello! Welcome to Kalvium   
//             <div>            
//                Let's rock and roll - this is babel
//             </div>
//         </div>
//       );
//     }  
//   }
//   const c4 = document.getElementById('react-container');
//   ReactDOM.render(<ReactContainer/>, c4); 
