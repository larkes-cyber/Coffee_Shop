import './_top_nav.scss';

const TopNav = () => {
    return (
        <div className='nav'>
        <div className='nav__text_icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
            <g filter="url(#filter0_d_4_46)">
            <g clip-path="url(#clip0_4_46)">
            <path d="M4.05415 26.9849C4.60045 31.5459 10.0971 34.985 16.8399 34.985C22.9019 34.985 28.0514 32.1874 29.3643 28.1815L29.3655 28.1795C29.5709 27.5611 29.6769 26.9145 29.6798 26.263C29.6767 26.0667 29.663 25.8709 29.6388 25.6763L29.6319 25.6141V25.6138C29.3931 23.8875 28.5379 22.3061 27.2236 21.1614C28.72 21.82 30.3324 22.1736 31.967 22.2024C33.3241 22.2278 34.6635 21.8915 35.8475 21.2283L35.8481 21.2275C36.3026 20.9693 36.7216 20.653 37.094 20.2862C37.3742 20.0009 37.6244 19.688 37.8415 19.3523L37.8421 19.3515C40.3037 15.6474 38.7286 9.42234 34.1779 4.87184C29.9639 0.657892 24.1703 -1.05624 20.4007 0.796676C19.7945 1.08992 19.2408 1.4809 18.7618 1.95397C18.5871 2.13293 18.4241 2.32272 18.2733 2.52249L18.273 2.52278C15.4689 6.13371 16.9653 12.6554 21.6799 17.37C22.1459 17.8346 22.636 18.2743 23.1478 18.6875C21.1336 17.9212 18.9952 17.5325 16.8399 17.541C10.8198 17.541 5.54087 20.4327 4.28783 24.4167C4.0986 25.0137 4.00142 25.6364 4 26.263C4.00342 26.5044 4.02137 26.7452 4.05386 26.9846L4.05415 26.9849ZM16.8399 33.8177C11.1626 33.8177 6.31657 31.1222 5.35193 27.5608C5.37501 27.5631 5.39866 27.5656 5.42118 27.5679C5.62978 27.5916 5.82841 27.6175 6.01393 27.6472C6.041 27.6514 6.06608 27.6563 6.09287 27.6608C6.26613 27.6896 6.43142 27.7207 6.59072 27.7537C6.61722 27.7591 6.64487 27.7643 6.67137 27.77C6.84178 27.8065 7.00622 27.8446 7.1678 27.8843C7.20285 27.8928 7.23762 27.9016 7.2721 27.9102C7.4277 27.9492 7.58158 27.9886 7.7369 28.029C9.24157 28.4559 10.801 28.6585 12.3646 28.63C13.9266 28.6588 15.4843 28.4556 16.9867 28.0276C18.3927 27.6238 19.8515 27.4334 21.314 27.4628C22.7771 27.4334 24.2365 27.6238 25.6431 28.0273C25.7893 28.0652 25.9375 28.1034 26.0879 28.1413C26.1227 28.1501 26.1575 28.1587 26.1925 28.1675C26.3521 28.2071 26.516 28.2459 26.6864 28.2832C26.7072 28.2878 26.7294 28.2921 26.7505 28.2966C26.9081 28.3302 27.0725 28.3624 27.2441 28.3929C27.2746 28.3983 27.3037 28.404 27.3344 28.4092C27.5205 28.4411 27.7172 28.4699 27.9249 28.4961C27.9434 28.4987 27.9588 28.5018 27.9776 28.5041C26.4692 31.6217 21.9484 33.8177 16.8399 33.8177ZM33.3526 5.69741C37.1761 9.52123 38.7768 14.7531 37.2465 18.0329C37.2308 18.0147 37.2149 17.9964 37.1997 17.9782C37.045 17.7961 36.9017 17.6203 36.774 17.4533C36.7626 17.4384 36.7529 17.4245 36.7418 17.4099C36.6201 17.2492 36.509 17.0942 36.4049 16.9432C36.3881 16.9186 36.3705 16.8936 36.3539 16.8693C36.2479 16.7129 36.1488 16.5599 36.0533 16.4083C36.035 16.3792 36.0171 16.3504 35.9989 16.3213C35.9068 16.1737 35.8168 16.0267 35.7264 15.8782C34.9447 14.5246 33.967 13.2943 32.8254 12.2271C31.7248 11.1194 30.4655 10.1812 29.0893 9.44372C27.7995 8.75493 26.6206 7.87691 25.5915 6.83846C24.522 5.84161 23.6078 4.69002 22.8794 3.42245C22.8053 3.30019 22.7298 3.17651 22.6528 3.05198L22.5939 2.95708C22.5112 2.82428 22.426 2.68977 22.3348 2.55156C22.3248 2.53617 22.3137 2.52021 22.3035 2.50482C22.2211 2.38057 22.1333 2.25319 22.0401 2.12239C22.0185 2.09218 21.9977 2.06226 21.9755 2.03148C21.8714 1.88785 21.7603 1.73995 21.6395 1.58663C21.6315 1.57609 21.6249 1.56668 21.6167 1.55642C24.9517 0.434471 29.7425 2.08705 33.3526 5.69741ZM19.5871 2.77926C19.8675 2.5014 20.1812 2.25917 20.5209 2.05855C20.5309 2.07024 20.5392 2.08135 20.5489 2.09303C20.6777 2.24977 20.7948 2.39967 20.9039 2.54501C20.9216 2.56866 20.9407 2.59317 20.9581 2.61654C21.0672 2.76472 21.1675 2.90807 21.2624 3.04827C21.2813 3.0762 21.3001 3.10384 21.3183 3.13149C21.4109 3.27056 21.4995 3.40763 21.5842 3.54328C21.5996 3.56779 21.6147 3.59229 21.6298 3.6168C21.7147 3.75388 21.7979 3.89009 21.8817 4.02831C22.662 5.38052 23.6383 6.60991 24.7788 7.67629C25.8793 8.78371 27.1387 9.72185 28.5148 10.4597C29.8046 11.1482 30.9836 12.0262 32.0126 13.0649C33.0835 14.0629 33.9992 15.2156 34.7293 16.4846C34.7894 16.5832 34.8498 16.6824 34.9111 16.7824C34.9319 16.8161 34.9536 16.8505 34.9747 16.8844C35.0177 16.9537 35.0607 17.0229 35.1052 17.0931C35.1314 17.1344 35.159 17.1763 35.1858 17.2179C35.2277 17.2831 35.2702 17.3484 35.3146 17.4151C35.3443 17.4595 35.3753 17.5051 35.4064 17.5504C35.4506 17.6154 35.4962 17.6812 35.5432 17.7479C35.5774 17.7961 35.6127 17.8451 35.6483 17.8944C35.6968 17.9608 35.7467 18.0283 35.7985 18.0967C35.8376 18.1483 35.8775 18.2008 35.9185 18.2535C35.9724 18.3227 36.0294 18.3937 36.0872 18.4652C36.1314 18.5199 36.1755 18.5746 36.2226 18.6308C36.2836 18.7043 36.3491 18.7801 36.4149 18.8562C36.4656 18.9146 36.5149 18.9725 36.5682 19.0323C36.5813 19.0471 36.5925 19.0608 36.6059 19.0756C36.5016 19.2107 36.389 19.3395 36.2687 19.4609C36.0801 19.6479 35.8749 19.8177 35.6557 19.9685L35.6355 19.9462C35.5982 19.9038 35.5648 19.8636 35.5292 19.8223C35.4617 19.7439 35.3944 19.6661 35.3323 19.5909C35.2938 19.5441 35.2579 19.4991 35.2212 19.4535C35.1673 19.3863 35.114 19.3196 35.0639 19.2546C35.0279 19.2081 34.9937 19.1628 34.9595 19.1172C34.9131 19.0554 34.8678 18.9941 34.8242 18.9337C34.792 18.8895 34.7606 18.8457 34.7301 18.8021C34.6874 18.7414 34.6458 18.6812 34.6056 18.6217C34.578 18.5809 34.55 18.5402 34.5233 18.4997C34.4825 18.4379 34.4426 18.3766 34.4033 18.3156C34.3793 18.2786 34.3551 18.2412 34.3317 18.2042C34.2896 18.1378 34.2485 18.0717 34.2078 18.0058C34.1884 17.9748 34.1687 17.9434 34.1496 17.9121C34.0918 17.818 34.0342 17.724 33.977 17.6297C33.1944 16.276 32.2164 15.0455 31.0745 13.978C29.9739 12.8703 28.7146 11.9321 27.3384 11.1946C26.0486 10.5061 24.8697 9.62781 23.8406 8.58936C22.7703 7.59165 21.8552 6.43949 21.1257 5.17135C21.0356 5.02345 20.9436 4.87355 20.8495 4.72194C20.8296 4.69002 20.8099 4.65811 20.7897 4.6259C20.6936 4.47316 20.5916 4.31699 20.4836 4.15683C20.4611 4.12321 20.438 4.08958 20.4146 4.05567C20.3021 3.8918 20.181 3.7231 20.0482 3.54727C20.0259 3.5182 20.002 3.48799 19.9795 3.45864C19.8356 3.27141 19.6814 3.07877 19.5064 2.87415L19.5019 2.86845C19.5301 2.83768 19.5583 2.80804 19.5871 2.77926ZM22.5052 16.5448C18.4603 12.4995 16.9322 7.09693 18.7926 3.84108C18.8065 3.85818 18.8213 3.87556 18.835 3.89237C18.9604 4.04683 19.0775 4.19616 19.1844 4.34007C19.2046 4.36715 19.2229 4.39336 19.2425 4.42015C19.3389 4.55209 19.4295 4.6809 19.5144 4.80658C19.5295 4.82938 19.5457 4.85217 19.5606 4.87469C19.6543 5.01518 19.7427 5.15311 19.8284 5.29018C19.8473 5.32011 19.8655 5.34974 19.884 5.37938C19.9661 5.5119 20.047 5.64412 20.1282 5.77778C20.9096 7.13028 21.8868 8.36023 23.0279 9.42719C24.1285 10.5346 25.3878 11.4727 26.7639 12.2103C28.0537 12.8991 29.2327 13.7771 30.2617 14.8155C31.3329 15.8141 32.2491 16.9671 32.9798 18.2361C33.0696 18.3837 33.1613 18.5328 33.2551 18.6838C33.277 18.7191 33.2987 18.7542 33.3212 18.7895C33.419 18.9445 33.5218 19.103 33.6321 19.2657C33.6544 19.2985 33.678 19.3321 33.7008 19.3655C33.8151 19.531 33.9362 19.7009 34.0716 19.879L34.0889 19.9029C34.2263 20.0827 34.3819 20.2731 34.5478 20.4695C34.5691 20.4945 34.5848 20.5168 34.6067 20.5424C31.2939 21.9134 26.2504 20.2891 22.5052 16.5448ZM16.8399 18.7083C22.5676 18.7083 27.4233 21.4332 28.3433 25.0316C28.3205 25.0291 28.2971 25.0268 28.2749 25.0245C28.0628 25.0009 27.8611 24.9746 27.673 24.9447C27.6479 24.9407 27.6245 24.9362 27.5997 24.9322C27.4268 24.9037 27.2618 24.8726 27.103 24.8398C27.0714 24.8333 27.0386 24.8273 27.0076 24.8205C26.8403 24.7848 26.6787 24.7472 26.52 24.7085C26.4784 24.6982 26.4365 24.688 26.3952 24.6774C26.2438 24.6395 26.0936 24.6013 25.9423 24.562C24.4377 24.1351 22.878 23.9325 21.314 23.961C19.7521 23.9322 18.1944 24.1351 16.692 24.5634C15.2859 24.9669 13.8271 25.1573 12.3646 25.1282C10.9013 25.1573 9.44191 24.9669 8.03498 24.5637C7.8905 24.5261 7.7443 24.4885 7.59612 24.4511C7.55565 24.4409 7.51518 24.4309 7.47415 24.4206C7.31627 24.3816 7.1544 24.3434 6.9857 24.3067C6.95919 24.3007 6.93127 24.2953 6.90419 24.2896C6.74831 24.2565 6.58559 24.2249 6.41603 24.1949C6.38468 24.1895 6.35476 24.1835 6.32284 24.1781C6.13561 24.1465 5.93698 24.118 5.72838 24.0918C5.70729 24.0892 5.68962 24.0858 5.66825 24.0832C7.145 20.9303 11.6815 18.7083 16.8399 18.7083ZM5.28211 25.2149L5.30405 25.2174C5.52975 25.2405 5.73807 25.2685 5.9367 25.2987C5.96491 25.3032 5.99483 25.3069 6.02276 25.3115C6.21427 25.3423 6.39437 25.3759 6.56849 25.4118C6.60354 25.4189 6.63888 25.426 6.67336 25.4337C6.8415 25.4696 7.00422 25.507 7.16352 25.546C7.20028 25.5551 7.23648 25.5643 7.27295 25.5734C7.42941 25.6127 7.58472 25.6526 7.74089 25.6934C9.24385 26.1211 10.8021 26.324 12.3646 26.2955C13.9266 26.3243 15.4843 26.1211 16.9867 25.6931C18.3927 25.2893 19.8515 25.0989 21.314 25.1282C22.7791 25.0992 24.2402 25.2893 25.6491 25.6919C25.7525 25.7187 25.8565 25.7455 25.9614 25.7723C26.0013 25.7826 26.0421 25.7925 26.0823 25.8025C26.1541 25.8207 26.2262 25.8387 26.2997 25.8564C26.3424 25.8666 26.3866 25.8769 26.4302 25.8871C26.5029 25.9042 26.5764 25.921 26.6513 25.9376C26.6978 25.9478 26.7451 25.9578 26.7927 25.9678C26.8674 25.9837 26.9437 25.9991 27.0215 26.0142C27.0717 26.0239 27.1224 26.0336 27.1737 26.043C27.2541 26.0576 27.337 26.0718 27.4208 26.0855C27.4732 26.094 27.5254 26.1026 27.5792 26.1108C27.6699 26.1248 27.7645 26.1373 27.8602 26.1502C27.9118 26.157 27.9622 26.1641 28.0158 26.1704C28.1275 26.1838 28.2446 26.1958 28.3638 26.2075C28.4068 26.2114 28.447 26.2163 28.4912 26.2203L28.5122 26.2226C28.5125 26.2359 28.5125 26.2496 28.5125 26.263C28.5114 26.6375 28.4669 27.0105 28.38 27.3747L28.3564 27.3719C28.1346 27.3488 27.93 27.3211 27.7345 27.2912C27.7043 27.2864 27.6727 27.2824 27.6431 27.2775C27.4547 27.247 27.2772 27.2137 27.1059 27.1784C27.0688 27.171 27.0321 27.1633 26.9956 27.1556C26.8303 27.1199 26.6696 27.0829 26.5126 27.0444C26.4747 27.035 26.437 27.0253 26.3994 27.0159C26.245 26.9772 26.0919 26.9378 25.9375 26.8977C24.4345 26.4696 22.8766 26.2667 21.314 26.2955C19.7521 26.2667 18.1944 26.4696 16.692 26.8979C15.2859 27.3015 13.8271 27.4918 12.3646 27.4628C10.8998 27.4916 9.43877 27.3015 8.03014 26.8991C7.92441 26.8717 7.81811 26.8441 7.71096 26.8167C7.67933 26.8088 7.64656 26.8008 7.61436 26.7925C7.53713 26.7731 7.45933 26.7537 7.37982 26.7344C7.33593 26.7238 7.29062 26.7136 7.24588 26.703C7.17578 26.6865 7.1051 26.6703 7.033 26.6543C6.98342 26.6432 6.93241 26.6326 6.8814 26.6218C6.81101 26.607 6.73919 26.5925 6.66624 26.5782C6.61152 26.5674 6.55624 26.5571 6.49981 26.5469C6.42629 26.5335 6.35049 26.5206 6.27383 26.5078C6.21455 26.4981 6.15528 26.4882 6.09372 26.479C6.01478 26.4668 5.93214 26.4557 5.84921 26.4448C5.78538 26.4363 5.7224 26.4275 5.65628 26.4195C5.56481 26.4086 5.46848 26.399 5.37216 26.3893C5.30947 26.383 5.24934 26.3759 5.18408 26.3702L5.16926 26.3687C5.16812 26.3334 5.16726 26.2981 5.16726 26.263C5.16783 25.9105 5.20631 25.5591 5.28211 25.2149Z" fill="white"/>
            <path d="M10.6884 30.1179C10.4484 29.9939 10.2205 29.8637 10.0045 29.7272C9.73173 29.5565 9.37238 29.6389 9.2011 29.911C9.02983 30.1832 9.11105 30.5428 9.38263 30.7149C9.62543 30.868 9.88163 31.0144 10.1515 31.1546C10.4379 31.3028 10.7901 31.1908 10.9383 30.9047C11.0865 30.6183 10.9748 30.2661 10.6884 30.1179Z" fill="white"/>
            <path d="M24.4496 29.1678C22.6255 30.6394 19.8518 31.4832 16.8399 31.4832C15.3176 31.4955 13.8029 31.2678 12.3515 30.8084C12.0455 30.7092 11.7169 30.8768 11.6171 31.1828C11.5174 31.4889 11.6844 31.8178 11.9902 31.9181C13.5581 32.4157 15.1947 32.6627 16.8399 32.6505C20.1137 32.6505 23.1544 31.7123 25.1826 30.0763C25.4334 29.8737 25.4727 29.5063 25.2704 29.2556C25.068 29.0045 24.7004 28.9652 24.4496 29.1678Z" fill="white"/>
            <path d="M20.6894 9.21288C20.625 8.98291 20.5702 8.75578 20.5255 8.53179C20.4622 8.21575 20.1547 8.01085 19.8387 8.07412C19.5227 8.13738 19.3178 8.44487 19.381 8.76091C19.4315 9.01255 19.493 9.26788 19.5654 9.5275C19.6523 9.83784 19.9744 10.0188 20.2847 9.93217C20.595 9.84525 20.7763 9.52322 20.6894 9.21288Z" fill="white"/>
            <path d="M32.1331 19.2919C32.1531 18.9702 31.9083 18.6932 31.5866 18.6735C29.1865 18.5256 26.3393 17.0774 24.1561 14.8939C23.0569 13.8081 22.1422 12.5503 21.4482 11.1698C21.3046 10.8817 20.9552 10.7643 20.6668 10.9071C20.3784 11.0499 20.2602 11.3992 20.4024 11.6879C21.1527 13.182 22.1419 14.5437 23.3308 15.7192C25.7428 18.1315 28.8023 19.6715 31.5147 19.8385C31.527 19.8394 31.5393 19.8397 31.5512 19.8397C31.8593 19.8391 32.1141 19.5994 32.1331 19.2919Z" fill="white"/>
            </g>
            </g>
            <defs>
            <filter id="filter0_d_4_46" x="0" y="0" width="43" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_46"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_46" result="shape"/>
            </filter>
            <clipPath id="clip0_4_46">
            <rect width="35" height="35" fill="white" transform="translate(4)"/>
            </clipPath>
            </defs>
            </svg>
            <div className='title title_fz12 nav__item'>Coffee house</div>
    </div>
    <div className='title title_fz12 nav__item'>Our coffee</div>
    <div className='title title_fz12 nav__item'>For your pleasure</div>
</div>
    )
}

export default TopNav;