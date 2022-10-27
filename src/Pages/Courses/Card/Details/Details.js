
import { Link, useLoaderData } from 'react-router-dom';
import jsPDF from 'jspdf'


const Details = () => {
    let genaratePDF = () => {
        let doc = new jsPDF("p", "pt", "a4")
        doc.html(document.querySelector("#content"), {
            callback: function (pdf) {
                pdf.save("mypdf.pdf")
            }
        })
    }


    const data = useLoaderData()
    console.log(data)
    const { name, img, title, description, category_id
    } = data
    return (
        <div id='content' className=' text-center'>

            <div>

                <button onClick={genaratePDF} type="primary" className="btn btn-primary mt-4 ">Convert pdf</button>

            </div>


            <div className="  card w-96 bg-base-100 shadow-xl">


                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h1>{name}</h1>
                    <h2 className="card-title"> {title}</h2>
                    <p>{description}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary"> <Link to={`/premium/${category_id
                            }`} className='text-2xl text-white no-underline'>Get premium access</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;