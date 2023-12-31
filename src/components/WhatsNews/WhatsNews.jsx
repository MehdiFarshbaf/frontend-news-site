import './whatsNews.css'
import sendnews from './../../assets/images/sendnews.jpg'
import {Link, NavLink} from "react-router-dom";

const WhatsNews = () => {
    return (
        <div id="whats-news" className="py-5">
            <div className="container">
                <div className="columns is-flex-widescreen is-block-tablet">
                    <div className="column is-flex is-one-quarter-widescreen is-justify-content-center">
                        <img src={sendnews} className="sendnews" alt=""/>
                    </div>
                    <div className="column is-three-quarters-widescreen is-justify-content-center">
                        <div className="whats-news has-background-white p-5">
                            <div
                                className="whats-news-title is-flex is-justify-content-space-between is-align-items-center">
                                <div className="whats-news-nav">
                                    <ul className="is-flex">
                                        <li className="ml-5 has-text-weight-bold"><NavLink to="/">همه</NavLink></li>
                                        <li className="ml-5 has-text-weight-bold"><NavLink to="/">طنز</NavLink></li>
                                        <li className="ml-5 has-text-weight-bold"><NavLink to="/">اجتماعی</NavLink></li>
                                    </ul>
                                </div>
                                <div className="whats-news-name">
                                    <h1 className="is-size-2 title">چه خبر</h1>
                                </div>
                            </div>
                            <div className="whats-news-post mt-6">
                                <div className="whats-news-post-item">
                                    <div className="whats-news-post-item-img">
                                        <Link to="">
                                            <img src={require("../../assets/images/1.jpeg")} alt=""/>
                                        </Link>
                                    </div>
                                    <div className="whats-news-post-item-description">
                                        <Link to=""><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                        </p></Link>
                                        <div className="whats-news-post-item-date"><p>19/19/95</p></div>
                                    </div>

                                </div>
                                <div className="whats-news-post-item">
                                    <div className="whats-news-post-item-img">
                                        <Link to="">
                                            <img src={require("../../assets/images/1.jpeg")} alt=""/>
                                        </Link>
                                    </div>
                                    <div className="whats-news-post-item-description">
                                        <Link to=""><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                        </p></Link>
                                        <div className="whats-news-post-item-date"><p>19/19/95</p></div>
                                    </div>

                                </div>
                                <div className="whats-news-post-item">
                                    <div className="whats-news-post-item-img">
                                        <Link to="">
                                            <img src={require("../../assets/images/1.jpeg")} alt=""/>
                                        </Link>
                                    </div>
                                    <div className="whats-news-post-item-description">
                                        <Link to=""><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                        </p></Link>
                                        <div className="whats-news-post-item-date"><p>19/19/95</p></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WhatsNews