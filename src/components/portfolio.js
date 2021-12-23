import React,{useContext,useState} from 'react';
import { Store } from "../context/store";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import ReactPaginate from "react-paginate";



const Portfolio = (props) => {
    let store = useContext(Store);
    let [projects, setProjects] = store.projects;


    const [pageNumber, setPageNumber] = useState(0);
    const portfolioPerPage = 6;
    const pagesVisited = pageNumber * portfolioPerPage;

    const renderList = projects.slice(pagesVisited, pagesVisited + portfolioPerPage).map((portfolio, i) => {
        const { id, image } = portfolio;
        return (
            <div className="col-lg-3 pad col-md-6 col-sm-12  p-md-2 p-sm-3 shadow-lg p-3 mb-5 bg-body m-3 hoverport" key={i} >
            <Link to={`/inner` + i} >
            <img src={image} className="img-fluid" alt="img" />
        </Link>   
    </div>
        )
    });
    const pageCount = Math.ceil(projects.length / portfolioPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    return (
        <>
            <section className="portfolio p-5 lh-lg" id="portfoliopage">
                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>Below are the images and links to few works have done so far</p>
                </div>
                <div className="container ms-lg-5">
                    <div className="row text-center">
                        <>{renderList}</>
                    </div>
                    <div className="paginateDiv">
                <ReactPaginate
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio;
