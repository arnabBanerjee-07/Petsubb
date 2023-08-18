import React, { useState,useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../style.css";
import self_kit_banner from "../assets/image/self-kit-banner.jpg";
import ava_hpv from "../assets/image/ava_hpv.jpg";
import ava_sti from "../assets/image/ava_sti.jpg";
import about_lab_img from "../assets/image/about-lab-img.png";
import { Link } from "react-router-dom";

const SelfcollectKit = () => {
  const [reloadKey, setReloadKey] = useState(1)
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []);

  return (
    <div class='site-wrap'>
      <Header key={reloadKey} productscount={cart?.length > 0 ? cart?.length : ''}/>
      <div class='inner-small-banner'>
        <h1 class='text-center'>
          <img src={self_kit_banner} alt='' class='img-fluid' />
        </h1>
      </div>
      <div class='container our-kit-sec'>
        <h3 class='secondary-title-light'>
        
          OUR KITS
        </h3>
        <div class='row'>
          <div class='col-lg-6 d-flex justify-content-center'>
            <div class='kit-card'>
              <Link to='/selfcollectkit/hpv'>
             
                <img src={ava_hpv} alt='' />
              </Link>
              {/* <h3 class='title'>AVA HPV</h3> */}
            </div>
          </div>
          <div class='col-lg-6 d-flex justify-content-center'>
            <div class='kit-card'>
              <Link to='/selfcollectkit/sti_open'>
       
                <img src={ava_sti} alt='' />
              </Link>
              {/* <h3 class='title'>AVA STI</h3> */}
            </div>
          </div>
        </div>

        <h3 class='secondary-title-light text-center mb-5'>
        
          WHY WE CHOOSE AVA
        </h3>
        <div class='row mb-5'>
          <div class='col-lg-6 bg-blue-light ms-auto'>
            <div class='choose-ava-list'>
              <ul>
                <li>
                
                Reliable results, mRNA test with 97.6% sensitivity and 90.2% specificity 
                </li>
                <li>
                
                System ensures complete anonymity, safeguarding the confidentiality of your results
                </li>
                <li>
                
                User-friendly, follow a few steps to collect sample yourself.
                </li>
                <li>
                
                Convenient, without any long waiting time. 
                </li>
              </ul>
              <p class='action'>
                <Link to='/selfcollectkit/sti/kit' class='btn btn-pink'>
                {/* <Link to='' class='btn btn-pink'> */}
                 
                  PURCHASE
                </Link>
              </p>
            </div>
          </div>
        </div>

        <h3 class='trinary-title-pink pt-5 text-center'>
          Why Our Customers Love AVA
        </h3>
        <div class='row mb-5'>
          <div class='col-lg-4 icon-card'>
            <div class='graphic' style={{backgroundColor:'#32B3BE'}}>
              
            </div>
            <h3 class='card-title'>Sarisa G. </h3>
            <p>
            The packaging is really good. I was pleasantly surprised by the quality of the packaging. At first, I was a little unsure about doing the inspection myself, but it turned out to be perfectly fine. It was not difficult at all. I really liked it. From now on, I would like to purchase this.
            </p>
          </div>
          <div class='col-lg-4 icon-card'>
            <div class='graphic' style={{backgroundColor:'#DF6DAB'}}>
              
            </div>
            <h3 class='card-title'>Sarisa G. </h3>
            <p>
            The testing kit is easy to use, and it comes with clear instructions to ensure completeness. It saves time from having to go to the hospital, as I can simply wait for the results at home.
            </p>
          </div>
          <div class='col-lg-4 icon-card'>
            <div class='graphic' style={{backgroundColor:'#FEE986'}}>
            </div>
            <h3 class='card-title'>Sarisa G. </h3>
            <p>
            It's great! It's a self-testing kit for cervical cancer, and it's convenient that you can perform the test yourself. It's also reassuring that the kit respects your personal privacy by not requiring personal identification. 
            </p>
          </div>
        </div>
        {/* <h3 class='trinary-title-pink text-center'>
         
          How AVA works
        </h3>
        <div class='embed-responsive embed-responsive-16by9 video-block'>
          <iframe
            class='embed-responsive-item'
            src='https://www.youtube.com/embed/zpOULjyy-n8?rel=0'
            allowfullscreen
          ></iframe>
        </div> */}

        <p class='actions text-center pt-5'>
          <Link to='' class='btn btn-pink-custom-bg'>
         
            Register Your Kit
          </Link>
        </p>
      </div>
      <div class='list-section bg-orange-light'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-4 left-sec'>
              <h3 class='section-title'>
            
              Things to Know Before Getting Tested
              </h3>
            </div>
            <div class='col-lg-8'>
              <ul class='custom-skatch-bullets'>
                <li>
                  <span class='icon'>
                    <svg
                      width='76'
                      height='83'
                      viewBox='0 0 76 83'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M42.2328 21.8395C37.6721 25.4864 33.1115 29.1251 28.5509 32.772C26.7233 34.2291 27.9305 41.2566 29.5988 39.9244C33.5726 36.752 37.5464 33.5713 41.5202 30.399C42.0651 38.5005 41.889 46.6187 41.0591 54.712C40.7237 58.0009 45.0664 61.6478 45.5778 56.6104C46.6844 45.8694 46.6592 35.1367 45.6281 24.3957C45.5694 23.7629 43.4484 20.882 42.2328 21.8478V21.8395Z'
                        fill='#BD56BF'
                      />
                      <path
                        d='M63.8907 30.6476C56.9368 12.5702 38.4546 2.84862 22.0669 9.78166C3.35848 17.7079 -5.01968 42.9953 3.09038 63.4125C11.7618 85.243 37.3319 86.7136 54.415 78.0903C62.5251 73.9935 69.8979 67.366 73.5172 57.9119C77.8068 46.7197 76.2485 33.7417 71.0624 23.3135C62.1397 5.36018 43.8334 -3.2918 26.1638 1.14879C24.3374 1.60717 24.815 7.91948 26.2979 7.54705C39.4432 4.24287 54.7166 8.08183 64.0248 19.5223C69.6214 26.4076 74.2461 35.9668 73.4837 45.5928C72.6543 56.1261 65.935 64.2337 58.2271 69.2855C53.5939 72.3223 48.4414 74.6142 43.1799 75.7411C33.4612 77.8133 21.1537 76.7724 12.8593 70.1354C6.19868 64.8067 2.26094 55.5436 2.37824 46.3091C2.52904 34.267 9.74264 23.4759 18.8162 17.9944C34.6174 8.45426 55.0517 16.5142 62.2486 35.2315C63.4383 38.316 64.5107 32.2806 63.8823 30.6572L63.8907 30.6476Z'
                        fill='#BD56BF'
                      />
                    </svg>
                  </span>
                 
                  Refrain from collecting sample if you have engaged in sexual intercourse within the past 24 hours.
                </li>
                <li>
                  <span class='icon'>
                    <svg
                      width='83'
                      height='90'
                      viewBox='0 0 83 90'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M37.6309 21.1589C31.6927 21.8767 27.3191 27.2498 27.438 33.7508C27.4563 34.8378 27.7765 38.4267 29.3229 38.2831C30.8875 38.1395 31.0247 34.807 31.0064 33.6483C31.0064 34.0379 33.7971 32.1307 34.1906 31.8949C35.499 31.0848 36.9172 30.2132 38.4636 30.2337C43.8254 30.3157 39.4151 35.9554 37.7682 37.9652C33.8063 42.7744 27.5204 46.6606 24.8486 52.5977C23.2474 56.1661 22.9729 62.4005 26.0747 65.1589C27.7308 66.6354 29.9451 66.6149 31.9672 66.6252C35.4624 66.6559 38.9576 66.6149 42.4529 66.6047C44.9233 66.6047 44.8135 57.4376 42.2516 57.4478C38.4819 57.4478 33.4311 56.4429 29.7987 57.4376C29.4784 57.2838 29.2039 57.2222 28.9477 57.2325C29.3778 56.7403 29.8261 56.2686 30.2928 55.8277C31.4639 54.5562 32.6992 53.3462 33.8978 52.1158C38.7747 47.0913 43.9443 42.0976 44.8776 34.3251C45.5364 28.8494 44.0358 20.4001 37.6309 21.1692V21.1589Z'
                        fill='#BD56BF'
                      />
                      <path
                        d='M69.7754 32.9082C62.181 13.4973 41.9965 3.05873 24.0994 10.5031C3.66782 19.014 -5.48202 46.1666 3.37502 68.0897C12.8451 91.5303 40.7704 93.1094 59.4269 83.8501C68.284 79.4511 76.3358 72.3348 80.2885 62.1833C84.9733 50.1656 83.2714 36.2304 77.6076 25.0331C67.8631 5.75554 47.8707 -3.5346 28.5737 1.23352C26.579 1.72571 27.1005 8.50361 28.7201 8.1037C43.0762 4.55582 59.7563 8.67793 69.9218 20.9622C76.0339 28.3554 81.0846 38.6196 80.2519 48.9557C79.3461 60.2659 72.0079 68.9715 63.5901 74.3959C58.5302 77.6566 52.9031 80.1176 47.157 81.3276C36.5432 83.5527 23.1021 82.435 14.0437 75.3085C6.76961 69.5867 2.46919 59.6404 2.59729 49.7247C2.76198 36.7944 10.64 25.2074 20.5493 19.3216C37.8058 9.07784 60.1223 17.7322 67.982 37.8301C69.2813 41.1421 70.4525 34.6616 69.7662 32.9184L69.7754 32.9082Z'
                        fill='#BD56BF'
                      />
                    </svg>
                  </span>{" "}
                  Avoid intentionally cleaning the collection area before performing the swab.
                </li>

                <li>
                  <span class='icon'>
                    <svg
                      width='81'
                      height='91'
                      viewBox='0 0 81 91'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M50.6211 49.1337C48.6835 47.6134 45.326 48.2694 43.183 48.2278C42.5311 48.2174 41.8704 48.1965 41.2185 48.1861C43.6027 44.5729 45.1474 40.5432 44.5938 34.91C44.2724 31.63 43.2366 28.1521 40.6917 26.3611C37.236 23.935 32.7892 25.5385 28.9942 25.1949C26.7083 24.9867 26.6012 34.2644 29.1907 34.4934C31.6016 34.7121 40.781 32.6608 41.1292 37.2007C41.415 40.9285 34.5572 46.1973 32.5928 48.6755C31.4587 50.1125 31.2177 57.266 33.6554 57.3181C36.8967 57.3805 40.1381 57.4534 43.3794 57.5159C43.9063 57.5263 44.8171 57.7033 45.7011 57.797C40.4149 61.2541 34.5572 62.9721 28.5299 63.3574C26.0476 63.5136 26.3065 72.8121 28.7264 72.656C33.8965 72.3227 38.9058 71.0316 43.6473 68.5846C47.3798 66.6582 51.8266 64.2008 52.7374 59.0778C53.2732 56.0789 53.1035 51.06 50.6301 49.1129L50.6211 49.1337Z'
                        fill='#BD56BF'
                      />
                      <path
                        d='M68.094 33.4174C60.6827 13.7062 40.9845 3.10606 23.5187 10.6657C3.57944 19.3082 -5.34992 46.881 3.2937 69.1433C12.5356 92.9467 39.788 94.5503 57.9949 85.1476C66.6386 80.6806 74.4964 73.4542 78.3539 63.1456C82.9257 50.942 81.2648 36.7911 75.7376 25.4205C66.2278 5.8446 46.7172 -3.58929 27.8851 1.25261C25.9385 1.75242 26.4475 8.6352 28.028 8.22911C42.0382 4.62632 58.3164 8.81222 68.2369 21.2866C74.2017 28.7942 79.1307 39.2173 78.3182 49.7133C77.4342 61.1985 70.2728 70.0388 62.0578 75.5471C57.1199 78.8584 51.6283 81.3574 46.0207 82.5861C35.6626 84.8457 22.5454 83.7107 13.7053 76.4739C6.60649 70.6636 2.40969 60.5633 2.5347 50.4942C2.69543 37.3638 10.3836 25.5975 20.0541 19.6206C36.8949 9.21831 58.6736 18.0066 66.3439 38.4155C67.6119 41.7788 68.7548 35.198 68.0851 33.4278L68.094 33.4174Z'
                        fill='#BD56BF'
                      />
                    </svg>
                  </span>{" "}
                  
                  Do not use any conterception pill preferbly 24 - 36 hours before collecting sample 
                </li>

                <li>
                  <span class='icon'>
                    <svg
                      width='77'
                      height='75'
                      viewBox='0 0 77 75'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M41.6279 38.122C40.5045 38.2765 39.9261 38.5253 38.744 38.7398V22.7129C38.744 21.8034 37.8469 18.7576 36.4385 18.8777C34.9965 18.9978 34.896 21.7862 34.896 22.7558V39.2803C32.6576 39.6406 30.4108 39.8809 28.2814 39.7264C27.4346 39.6664 26.1268 39.5119 25.431 38.9199C24.1148 37.8046 24.601 37.1697 24.8525 35.7025C25.3136 33.0686 25.7747 30.4346 26.2358 27.8006C26.4621 26.5051 26.7807 23.4936 25.5232 22.567C24.3243 21.6919 23.5698 22.567 23.3183 23.9998C22.3123 29.7568 18.9924 38.817 22.6057 44.2479C25.104 48.0059 30.1677 47.8514 34.896 47.0793V56.6714C34.896 57.5808 35.2145 60.5837 36.623 60.4636C38.0649 60.3435 38.744 57.598 38.744 56.6285V46.513C40.077 46.247 40.7392 45.9467 41.804 45.8009C44.2016 45.4663 43.7573 37.8389 41.6195 38.1392L41.6279 38.122Z'
                        fill='#BD56BF'
                      />
                      <path
                        d='M63.9315 27.5349C56.9732 11.2935 38.4791 2.5593 22.081 8.78817C3.36063 15.9093 -5.02288 38.6284 3.09235 56.9719C11.7693 76.5851 37.3558 77.9064 54.4497 70.1589C62.565 66.4782 69.9424 60.5239 73.5641 52.03C77.8565 41.9745 76.2971 30.3147 71.1078 20.9456C62.1793 4.81576 43.8614 -2.95746 26.1805 1.03211C24.3529 1.44393 24.8308 7.11513 26.3147 6.78052C39.4684 3.81194 54.7515 7.26098 64.0656 17.5395C69.6658 23.7255 74.2935 32.3138 73.5306 40.9621C72.7006 50.4255 65.9771 57.7097 58.2642 62.2484C53.6281 64.9768 48.4723 67.0359 43.2074 68.0483C33.4826 69.9101 21.1672 68.9749 12.8675 63.012C6.20264 58.2245 2.26239 49.9022 2.37976 41.6056C2.53066 30.7866 9.74886 21.0915 18.8282 16.1667C34.6395 7.59559 55.0869 14.8369 62.2883 31.6531C63.4788 34.4244 64.5518 29.002 63.9231 27.5434L63.9315 27.5349Z'
                        fill='#BD56BF'
                      />
                    </svg>
                  </span>{" "}
                 
                  Do not collect sample if have had physical examination within the past 24 hours 
                </li>

                <li>
                  <span class='icon'>
                  <svg
      xmlns="http://www.w3.org/2000/svg"
      width="77"
      height="75"
      fill="none"
      viewBox="0 0 77 75"
    >
      <path
        fill="#BD56BF"
        d="M63.931 27.535C56.974 11.294 38.48 2.559 22.081 8.788 3.361 15.91-5.023 38.628 3.092 56.972 11.77 76.585 37.356 77.906 54.45 70.159c8.115-3.68 15.492-9.635 19.114-18.129 4.293-10.056 2.733-21.715-2.456-31.084C62.179 4.816 43.86-2.957 26.18 1.032c-1.827.412-1.35 6.083.135 5.749 13.153-2.97 28.436.48 37.75 10.759 5.6 6.186 10.228 14.774 9.466 23.422-.83 9.463-7.554 16.748-15.267 21.286-4.636 2.729-9.792 4.788-15.057 5.8-9.724 1.862-22.04.927-30.34-5.036C6.204 58.224 2.262 49.902 2.38 41.606c.15-10.82 7.369-20.515 16.448-25.44 15.811-8.57 36.259-1.33 43.46 15.487 1.19 2.771 2.264-2.651 1.635-4.11l.008-.008z"
      ></path>
      <path
        fill="#BD56BF"
        d="M32 21.5l-1.304.26a1.969 1.969 0 00-1.522 1.409c-.786 2.867-2.787 10.44-3.674 16.33-.26 1.723.826 3.224 1.932 4.27 1.234 1.17 2.96 1.551 4.66 1.551H37l6.591-.44a.954.954 0 011.026.84c.248 2.206.63 7.885-1.617 10.28-3.477 3.704-9.374 1.965-13.5-1-1.41-1.013-2.657-2.943-3.479-4.437-.421-.767-1.601-.758-1.956.041l-.855 1.923a.964.964 0 00.062.911C23.988 54.565 26.006 57.574 28 59c5.718 4.09 16 3 18 0s2-12.5 2-12.5-.5-6.5-1.5-7-13 1-14.5.5c-1.186-.395-1-.75-1-2 0-.777 1.51-7.892 2.182-11.028a2.003 2.003 0 011.82-1.576C38.891 25.116 49 24.308 49 23.5c0-2.876-3.384-4.196-6.223-3.738L32 21.5z"
      ></path>
    </svg>
                  </span>{" "}
                  Collect sample at least 5-7 days after period ends 
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class='kit-about-lab'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-6'>
              <h2 class='sec-title'>
                About Our Lab
                </h2>
              <p>
              
                Through the use of such products and services, we also believe that our health and environments should not be harmed - so that we can contribute to make this world better and safer for our children and their children. Therefore, we proactively seek to source externally or create internally such products and services in order to provide the best value added solution for our clients.
                </p>
            </div>
            </div>
            <div class='row'>
            <div class='col-lg-6'></div>
            <div class='col-lg-6 extra-top-padd'>
              <img src={about_lab_img} alt='' />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Banner ends --> */}

      {/* <!-- Start footer --> */}
      <Footer />
      {/* <!-- end footer --> */}
    </div>
  );
};

export default SelfcollectKit;
