import React from "react";

const Footer = () => {
  return (<div><div className="bg-white h-600"></div>
        <footer className=" bg-gray-200  ">
            <div className="p-10 bg-gray-800 text-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                            <div className="mb-5">
                                <h4 className="text-2xl pb-4">Company</h4>
                                <p className="text-gray-500">chilling road 
                                    Bangalore <br/>
                                    576110.<br/><br/>
                                    <strong>Phone:</strong>+1 223 9939393<br/>
                                    <strong>Email:</strong>+1 223 9939393<br/></p>
                            </div>
                            <div className="mb-5">
                                <h4>Useful links</h4>
                                <ul className="text-gray-500">
                                    <li className="pb-1"><i className="fa fa-chevron-right"></i><a href="#" className="hover:text-gray-400">Home</a></li>
                                    <li className="pb-1"><i className="fa fa-chevron-right"></i><a href="#" className="hover:text-gray-400">About us</a></li>
                                    <li className="pb-1"><i className="fa fa-chevron-right"></i><a href="#" className="hover:text-gray-400">Services</a></li>
                                    <li className="pb-1"><i className="fa fa-chevron-right"></i><a href="#" className="hover:text-gray-400">Terms of service</a></li>
                                    <li className="pb-1"><i className="fa fa-chevron-right"></i><a href="#" className="hover:text-gray-400">Privacypolicy</a></li>
                                </ul>
                            </div>
                            <div className="mb-5">
                                <h4>Our Services</h4>
                                <ul>
                                    <li className="pb-1 text-gray-500"><i className="fa fa-chevron-right"></i><a href="#" className="hover:text-gray-400">serviee1</a></li>
                                    <li className="pb-1 text-gray-500"><i className="fa fa-chevron-right"></i><a href="#" className="hover:text-gray-400">serviee1</a></li>
                                    <li className="pb-1 text-gray-500"><i className="fa fa-chevron-right"></i><a href="#" className="hover:text-gray-400">serviee1</a></li>
                                    <li className="pb-1 text-gray-500"><i className="fa fa-chevron-right"></i><a href="#" className="hover:text-gray-400">serviee1</a></li>
                                    <li className="pb-1 text-gray-500"><i className="fa fa-chevron-right"></i><a href="#" className="hover:text-gray-400">serviee1</a></li>
                                </ul>
                            </div>
                            <div className="mb-5">
                                <h4 className="pb-4">Join our new letter</h4>
                                <p className="text-gray-200 pb-2">Join amongst the 20000+ creaters and dont miss out on latest trends.</p>
                                <form className="flex flex-row flex-wrap">
                                    <input type="text" className="text-gray-500 w-2/3 p-2 focus:border-gray-500" placeholder="Enter email" id=""/>
                                    <button className="p-2 w-1/3 bg-gray-700 text-white hover:bg-gray-600">Subscribe</button>
                                </form>
                            </div> 
                    </div>
                </div>
            </div>
            <div className="w-full bg-gray-900 text-gray-500 px-10">
                <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
                    <div className="text-center">
                        <div>
                            Copyright <i className="fa fa-copyright"></i><strong><span> company </span></strong>. All Rights Reserved
                        </div>
                    </div>
                    <div className="text-center text-xl text-white mb-2">
                        <a href="#" className="w-10 h-10 rounded-full bg-blue-300 hover:bg-blue-400mx-1 inline-block pt-1"><i className="fa fa-twitter"></i></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-blue-300 hover:bg-blue-400mx-1 inline-block pt-1"><i className="fa fa-instagram"></i></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-blue-300 hover:bg-blue-400mx-1 inline-block pt-1"><i className="fa fa-github"></i></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-blue-300 hover:bg-blue-400mx-1 inline-block pt-1"><i className="fa fa-linkedin"></i></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-blue-300 hover:bg-blue-400mx-1 inline-block pt-1"><i className="fa fa-facebook"></i></a>
                    </div>
                </div>
            </div>
        </footer>
  </div>);
  
};

export default Footer;