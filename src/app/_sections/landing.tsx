import { Button } from '@nextui-org/react';
import '@/lib/fontawesome/css/fa.css';
import LargeButton from '@/components/large-button';

export default function Landing() {
  return (
    <section className='flex h-[calc(100dvh-4rem)] w-full flex-col items-center justify-center px-16 max-md:px-4'>
      <div className='flex items-center max-md:flex-col max-md:items-start'>
        <div className='w-1/2 pr-24 max-md:hidden'>
          <img src='/logo.png' className='mb-8 h-40 w-40' />
          <h1 className='pb-1 text-6xl font-bold leading-snug max-xl:text-4xl'>
            Olimpiada de Istorie 2024
          </h1>
          <h1 className='text-6xl font-bold leading-snug max-xl:text-4xl'>
            Etapa Națională
          </h1>
          <p className='py-8 text-lg max-xl:text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
            massa sagittis, ultricies tellus vitae, sodales nunc. Morbi semper
            scelerisque condimentum. Phasellus luctus lacus nec dolor fermentum
            rhoncus. Sed at dolor justo.
          </p>
          <Button color='default' size='lg' className='text-white'>
            Vezi mai multe despre concurs
            <i className='fa fa-arrow-right ml-2'></i>
          </Button>
        </div>
        <div className='pb-10 md:hidden'>
          <h1 className='pb-1 text-6xl font-bold leading-snug max-xl:text-4xl'>
            Olimpiada de Istorie 2024
          </h1>
          <h1 className='text-6xl font-bold leading-snug max-xl:text-4xl'>
            Etapa Națională
          </h1>
          <p className='py-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
            massa sagittis, ultricies tellus vitae, sodales nunc. Morbi semper
            scelerisque condimentum. Phasellus luctus lacus nec dolor fermentum
            rhoncus. Sed at dolor justo.
          </p>
        </div>
        <div className='w-1/2 max-md:w-3/4 self-center'>
          <svg
            className='w-full'
            xmlns='http://www.w3.org/2000/svg'
            // xmlns:xlink='http://www.w3.org/1999/xlink'
            width='674'
            viewBox='0 0 674 579'
            fill='none'
          >
            <rect
              x='230.5'
              y='2.5'
              width='422'
              height='279'
              rx='17.5'
              fill='url(#pattern0)'
              stroke='black'
              // style='stroke:black;stroke-opacity:1;'
              strokeWidth='5'
            ></rect>
            <rect
              x='2.5'
              y='234.5'
              width='480'
              height='342'
              rx='17.5'
              fill='url(#pattern1)'
              stroke='black'
              // style='stroke:black;stroke-opacity:1;'
              strokeWidth='5'
            ></rect>
            <g clipPath='url(#clip0_56_2)'>
              <path
                d='M542.854 527.338C538.39 525.969 532.6 522.141 529.72 516.67C527.628 512.689 527.255 508.223 528.642 503.753C531.518 494.5 544.491 487.282 555.931 480.924C562.207 477.431 569.332 473.481 570.81 470.927C572.912 467.346 575.216 459.706 567.169 448.843C560.777 440.219 555.254 431.777 557.825 423.325C560.746 413.724 570.894 410.315 578.27 408.575C580.822 407.96 583.444 407.691 586.068 407.777C587.059 403.053 589.009 399.042 591.586 396.515C594.502 393.651 598.836 391.797 603.016 390.001C609.064 387.414 614.777 384.971 615.399 380.255C615.951 376.022 611.107 364.717 606.89 360.444C603.076 356.565 599.449 349.341 603.873 336.862C604.008 336.481 604.217 336.13 604.487 335.83C604.757 335.53 605.083 335.286 605.447 335.113C605.811 334.939 606.205 334.839 606.608 334.819C607.01 334.798 607.413 334.858 607.793 334.993C608.172 335.129 608.522 335.338 608.821 335.609C609.12 335.88 609.363 336.208 609.536 336.573C609.709 336.938 609.809 337.334 609.83 337.738C609.85 338.142 609.791 338.546 609.656 338.927C607.803 344.152 606.577 351.378 611.253 356.117C615.929 360.856 622.415 373.962 621.483 381.065C620.405 389.254 612.449 392.657 605.428 395.661C601.59 397.304 597.964 398.854 595.871 400.91C594.035 402.717 592.805 405.641 592.131 408.767C592.628 408.919 593.094 409.062 593.513 409.235C597.801 410.848 600.947 413.638 602.128 416.878C603.59 420.868 601.811 424.85 597.594 427.021C593.867 428.925 590.26 428.157 587.948 424.956C586.174 422.478 585.255 418.489 585.355 413.924C583.442 413.897 581.532 414.108 579.671 414.551C570.158 416.794 565.229 420.049 563.69 425.11C561.954 430.815 566.674 437.849 572.098 445.165C579.624 455.322 581.047 465.571 576.108 474.032C573.764 478.053 567.213 481.685 558.912 486.301C548.993 491.818 536.65 498.681 534.487 505.58C533.588 508.537 533.784 511.218 535.136 513.786C537.318 517.937 542.013 520.636 544.637 521.441C545.415 521.68 546.066 522.218 546.448 522.939C546.83 523.659 546.911 524.503 546.674 525.283C546.436 526.063 545.9 526.716 545.182 527.1C544.464 527.483 543.624 527.564 542.847 527.325L542.854 527.338ZM591.517 415.076C591.559 417.798 592.049 420.126 592.936 421.359C593.272 421.828 593.538 422.197 594.81 421.545C596.922 420.459 596.548 419.437 596.387 419.001C595.894 417.682 594.174 416.115 591.508 415.073L591.517 415.076Z'
                fill='black'
                // style='fill:black;fill-opacity:1;'
              ></path>
            </g>
            <g clipPath='url(#clip1_56_2)'>
              <path
                d='M202.382 107.2C202.683 107.73 202.981 108.254 203.238 108.805C203.45 109.229 203.577 109.69 203.61 110.162C203.642 110.635 203.582 111.11 203.432 111.56C203.282 112.009 203.044 112.425 202.733 112.784C202.422 113.142 202.043 113.437 201.619 113.649C201.194 113.862 200.732 113.989 200.258 114.024C199.785 114.058 199.31 114 198.86 113.851C198.409 113.702 197.993 113.466 197.635 113.156C197.277 112.847 196.983 112.47 196.771 112.046C190.651 99.7413 169.884 87.3672 149.913 89.2618C145.305 89.7022 137.27 91.4677 135.29 98.3997C134.385 101.577 134.732 104.819 135.675 107.823C136.737 107.891 137.794 107.996 138.853 108.144C150.683 109.792 170.021 115.938 174.79 126.073C176.443 129.58 176.227 133.216 174.131 136.605C172.416 139.388 169.46 141.004 165.81 141.152C162.949 141.266 159.662 140.523 156.041 138.938C146.65 134.835 136.081 125.552 130.856 115.031C120.857 115.65 111.489 120.309 108.97 126.602C107.691 129.783 106.451 135.009 110.413 143.624C111.649 146.152 113.119 148.559 114.806 150.812C125.424 148.668 137.635 151.538 144.878 156.479C151.242 160.82 153.3 166.455 150.382 171.545C147.131 177.211 142.461 178.227 139.116 178.089C130.091 177.706 119.509 168.138 112.135 159.091C109.544 160.085 107.249 161.724 105.47 163.852C102.127 167.972 100.795 173.69 101.819 179.537C103.214 187.506 108.872 195.789 118.198 203.477C118.563 203.779 118.864 204.149 119.085 204.567C119.307 204.985 119.443 205.442 119.487 205.913C119.575 206.865 119.282 207.813 118.67 208.551C118.059 209.288 117.18 209.753 116.227 209.844C115.274 209.935 114.324 209.645 113.587 209.036C102.779 200.116 96.4277 190.615 94.71 180.794C93.329 172.895 95.2082 165.07 99.8669 159.327C101.996 156.729 104.67 154.628 107.699 153.174C106.244 151.104 104.957 148.92 103.851 146.643C100.004 138.277 99.4846 130.848 102.272 123.928C105.672 115.478 116.302 109.33 128.267 108.015C127.297 104.223 127.328 100.242 128.358 96.4602C130.694 88.2621 138.122 83.1586 149.26 82.1051C167.435 80.3425 192.605 90.0033 202.382 107.2ZM139.459 115.51C139.997 116.325 140.525 117.062 141.011 117.701C145.743 123.947 152.617 129.546 158.942 132.319C162.337 133.806 166.744 134.827 167.987 132.844C168.784 131.545 168.866 130.444 168.257 129.151C165.732 123.747 152.768 117.682 139.463 115.508L139.459 115.51ZM120.098 157.337C126.336 164.317 134.011 170.625 139.434 170.855C140.879 170.905 142.576 170.621 144.11 167.944C145.288 165.892 142.544 163.603 140.786 162.397C135.785 158.976 127.639 156.833 120.098 157.328L120.098 157.337Z'
                fill='black'
                // style='fill:black;fill-opacity:1;'
              ></path>
            </g>
            <defs>
              <pattern
                id='pattern0'
                patternContentUnits='objectBoundingBox'
                width='1'
                height='1'
              >
                <use
                  xlinkHref='#image0_56_2'
                  transform='matrix(0.000501588 0 0 0.000754148 -0.00158777 0)'
                ></use>
              </pattern>
              <pattern
                id='pattern1'
                patternContentUnits='objectBoundingBox'
                width='1'
                height='1'
              >
                <use
                  xlinkHref='#image1_56_2'
                  transform='matrix(0.0011127 0 0 0.00155521 -0.000713473 0)'
                ></use>
              </pattern>
              <clipPath id='clip0_56_2'>
                <rect
                  width='146'
                  height='152'
                  fill='white'
                  // style='fill:white;fill-opacity:1;'
                  transform='translate(608.083 333) rotate(63.5445)'
                ></rect>
              </clipPath>
              <clipPath id='clip1_56_2'>
                <rect
                  width='98'
                  height='132'
                  fill='white'
                  // style='fill:white;fill-opacity:1;'
                  transform='translate(110.844 213.27) rotate(-119.619)'
                ></rect>
              </clipPath>
              <image
                id='image1_56_2'
                width='900'
                height='650'
                xlinkHref='/brasov1.png'
              ></image>
              <image
                id='image0_56_2'
                width='2000'
                height='1326'
                xlinkHref='/brasov2.png'
              ></image>
            </defs>
          </svg>
        </div>
      </div>
      <div className='flex w-full gap-4 pt-20'>
        <LargeButton
          text='Mesaje de bun venit'
          className='bg-primary text-black'
          arrowClassName='bg-black text-white'
        />
        <LargeButton
          text='Despre Brașov'
          className='bg-secondary text-black'
          arrowClassName='bg-black text-white'
        />
        <LargeButton
          text='Despre Colegiul Național „Andrei Șaguna”'
          className='bg-black text-white'
          arrowClassName='bg-white text-black'
        />
      </div>
    </section>
  );
}
