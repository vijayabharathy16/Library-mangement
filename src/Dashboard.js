import React from "react";
import './App.css';
import CollectionBook from "./CollectionBook";
export function Dashboard() {
    const collectionBooks = [
        {
            img :"https://4.imimg.com/data4/CG/HP/MY-3291959/school-_-college-books-500x500.jpg",
            title:"College Books",

            descriptions:"Some collage book text to build on the card title and make up the bulk of the card's content."
        },
        {
            img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRByV47vu-81KOdF2CRZKiC7ON8hYni4cmaXA&usqp=CAU",
            title:"School Book",

            descriptions:"Some school book text to build on the card title and make up the bulk of the card's content."
        },
        {
            img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuzlt0YhWfX9aK78yno7Z95XoVbZhghJDo9ESYoCXShGCEqQgV9niOLA9MHCCCLm0FC68&usqp=CAU",
            title:"Novels",

            descriptions:"Some novels text to build on the card title and make up the bulk of the card's content."
        },
        {
            img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN7k2gYv8W3f4TLD7oC9xY2lZZq7seqsCp3A&usqp=CAU/200x150",
            title:"Media",

            descriptions:"Some media text to build on the card title and make up the bulk of the card's content."
        },
        {
            img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDCB-sTcmfV7lu06GLPnqB-KVpmFv7LmZ1cQ&usqp=CAU",
            title:"Comics",

            descriptions:"Some comics text to build on the card title and make up the bulk of the card's content."
        },
        {
            img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBMreQwkH9KkilOVaPWnH1fe4yP-Lv2vgs7g&usqp=CAU",
            title:"Languages",

            descriptions:"Some language text to build on the card title and make up the bulk of the card's content."
        },
        {
            img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4g_-i-QmUoFuYc7wpGACCM6quSLKlt3s2UQ&usqp=CAU",
            title:"Religious",

            descriptions:"Some Religious text to build on the card title and make up the bulk of the card's content."
        },
        {
            img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLYH2Tb4W6xoXN5_trvH9fYVTlEUFy-0pPKg&usqp=CAU",
            title:"Story",

            descriptions:"Some story text to build on the card title and make up the bulk of the card's content."
        },
        
    ]
    return (
        <div className="container-fluid">
            <div className="row">
            <div className="col-lg-10">
                <div className="row">
                {
                 collectionBooks.map((collection)=>{
                    return  <CollectionBook pData={collection}></CollectionBook>
                 })

                }
                </div>
            </div>
            </div>

        </div>

//         <div >
//             <div  className="d-sm-flex align-items-center bg-light justify-content-between db-head mb-4">
//                 <h1 className="h3 mb-0 text-gray-800">Collections of books</h1>
//                 {/* <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
//                     className="fas fa-download fa-sm text-white-50"></i> Generate Report</a> */}
//             </div>

//             <div className="row dash">

//                 <div className="col-xl-3 col-md-6 mb-4">
//                     <div class="card text-white bg-primary mb-3" style={{ maxWidth: "18rem" }}>
//                         {/* <div class="card-header">Books</div> */}
//                         <div class="card-body">
//                             <img src={img} alt="photo"/>
//                             <h5 class="card-title">{title}</h5>
//                             <p class="card-text">{descriptions}</p>
//                         </div>
//                         <div />
//                     </div>
//                 </div>

//                 {/* <div className="col-xl-3 col-md-6 mb-4">
//                     <div class="card text-white bg-secondary mb-3" style={{ maxWidth: "18rem" }}>
//                         <div class="card-header">Books</div>
//                         <div class="card-body">
//                             <h5 class="card-title">School Books</h5>
//                             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         </div>
//                         <div />
//                     </div>
//                 </div>

//                 <div className="col-xl-3 col-md-6 mb-4">
//                     <div class="card text-white bg-success mb-3" style={{ maxWidth: "18rem" }}>
//                         <div class="card-header">Books</div>
//                         <div class="card-body">
//                             <h5 class="card-title">Novels</h5>
//                             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         </div>
//                         <div />
//                     </div>
//                 </div>

//                 <div className="col-xl-3 col-md-6 mb-4">
//                     <div class="card text-white bg-danger mb-3" style={{ maxWidth: "18rem" }}>
//                         <div class="card-header">Books</div>
//                         <div class="card-body">
//                             <h5 class="card-title">Media</h5>
//                             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         </div>
//                         <div />
//                     </div>
//                 </div>


//                 <div className="col-xl-3 col-md-6 mb-4">
//                     <div class="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
//                         <div class="card-header">Books</div>
//                         <div class="card-body">
//                             <h5 class="card-title">Comics</h5>
//                             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         </div>
//                         <div />
//                     </div>
//                 </div>


//                 <div className="col-xl-3 col-md-6 mb-4">
//                     <div class="card text-dark bg-success mb-3" style={{ maxWidth: "18rem" }}>
//                         <div class="card-header">Books</div>
//                         <div class="card-body">
//                             <h5 class="card-title">Languages</h5>
//                             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         </div>
//                         <div />
//                     </div>
//                 </div>

//                 <div className="col-xl-3 col-md-6 mb-4">
//                     <div class="card text-white bg-info mb-3" style={{ maxWidth: "18rem" }}>
//                         <div class="card-header">Books</div>
//                         <div class="card-body">
//                             <h5 class="card-title">Religious</h5>
//                             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         </div>
//                         <div />
//                     </div>
//                 </div>


//                 <div className="col-xl-3 col-md-6 mb-4">
//                     <div class="card text-dark bg-Warning mb-3" style={{ maxWidth: "18rem" }}>
//                         <div class="card-header">Books</div>
//                         <div class="card-body">
//                             <h5 class="card-title">Story</h5>
//                             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         </div>
//                         <div />
//                     </div>
//                 </div> */}

//             </div>

//         </div>

    )
}


