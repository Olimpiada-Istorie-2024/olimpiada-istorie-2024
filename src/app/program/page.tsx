import '@/lib/fontawesome/css/fa.css';
import { cn } from '@/lib/utils';

function Program() {
  const date = new Date().toLocaleDateString('ro-RO', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <main className='flex flex-col'>
      <div className='flex h-screen flex-col gap-8 pb-16 pt-32'>
        <div className='grow basis-0 px-16 sm:px-4'>
          <div className='relative flex h-full w-full flex-col items-center justify-center bg-cover px-16'>
            <img
              className='absolute z-[0] h-full w-full rounded-[1.25rem] object-cover [filter:brightness(65%)]'
              src='/brasov3.jpeg'
              alt='brasov'
            />
            <div className='flex w-[80%] max-w-[60rem] flex-col items-center md:mb-48 md:mt-48'>
              <h1 className='relative z-10 text-[3rem] font-bold text-white md:text-3xl'>
                Program
              </h1>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-5 items-center gap-6 px-16 lg:grid-cols-3 md:grid-cols-2 md:gap-4 sm:grid-cols-1 sm:px-4'>
          <div
            className={cn(
              'flex grow basis-0 flex-col gap-4 rounded-[2rem] border-4 px-5',
              date === '28.04.2024' ? 'bg-secondary py-10' : 'bg-primary py-5'
            )}
          >
            <div className='flex items-center justify-between'>
              <div className='flex flex-col'>
                <label className='text-xl font-semibold'>SÂMBĂTĂ</label>
                <label className='text-base font-semibold'>27.04.2024</label>
              </div>
              <div className='flex aspect-square h-[3rem] items-center justify-center rounded-full bg-black lg:h-[2rem]'>
                <i className='fa fa-arrow-right max-xl:text-base flex aspect-square items-center justify-center p-1 text-xl text-white lg:p-0.5 lg:text-sm sm:rotate-90' />
              </div>
            </div>
          </div>
          <div
            className={cn(
              'flex grow basis-0 flex-col gap-4 rounded-[2rem] border-4 px-5',
              date === '28.04.2024' ? 'bg-secondary py-10' : 'bg-primary py-5'
            )}
          >
            <div className='flex items-center justify-between'>
              <div className='flex flex-col'>
                <label className='text-xl font-semibold'>DUMINICĂ</label>
                <label className='text-base font-semibold'>28.04.2024</label>
              </div>
              <div className='flex aspect-square h-[3rem] items-center justify-center rounded-full bg-black lg:h-[2rem]'>
                <i className='fa fa-arrow-right max-xl:text-base flex aspect-square items-center justify-center p-1 text-xl text-white lg:p-0.5 lg:text-sm sm:rotate-90' />
              </div>
            </div>
          </div>
          <div
            className={cn(
              'flex grow basis-0 flex-col gap-4 rounded-[2rem] border-4 px-5',
              date === '28.04.2024' ? 'bg-secondary py-10' : 'bg-primary py-5'
            )}
          >
            <div className='flex items-center justify-between'>
              <div className='flex flex-col'>
                <label className='text-xl font-semibold'>LUNI</label>
                <label className='text-base font-semibold'>29.04.2024</label>
              </div>
              <div className='flex aspect-square h-[3rem] items-center justify-center rounded-full bg-black lg:h-[2rem]'>
                <i className='fa fa-arrow-right max-xl:text-base flex aspect-square items-center justify-center p-1 text-xl text-white lg:p-0.5 lg:text-sm sm:rotate-90' />
              </div>
            </div>
          </div>
          <div
            className={cn(
              'flex grow basis-0 flex-col gap-4 rounded-[2rem] border-4 px-5',
              date === '28.04.2024' ? 'bg-secondary py-10' : 'bg-primary py-5'
            )}
          >
            <div className='flex items-center justify-between'>
              <div className='flex flex-col'>
                <label className='text-xl font-semibold'>MARȚI</label>
                <label className='text-base font-semibold'>30.04.2024</label>
              </div>
              <div className='flex aspect-square h-[3rem] items-center justify-center rounded-full bg-black lg:h-[2rem]'>
                <i className='fa fa-arrow-right max-xl:text-base flex aspect-square items-center justify-center p-1 text-xl text-white lg:p-0.5 lg:text-sm sm:rotate-90' />
              </div>
            </div>
          </div>
          <div
            className={cn(
              'flex grow basis-0 flex-col gap-4 rounded-[2rem] border-4 px-5',
              date === '28.04.2024' ? 'bg-secondary py-10' : 'bg-primary py-5'
            )}
          >
            <div className='flex items-center justify-between'>
              <div className='flex flex-col'>
                <label className='text-xl font-semibold'>MIERCURI</label>
                <label className='text-base font-semibold'>01.05.2024</label>
              </div>
              <div className='flex aspect-square h-[3rem] items-center justify-center rounded-full bg-black lg:h-[2rem]'>
                <i className='fa fa-arrow-right max-xl:text-base flex aspect-square items-center justify-center p-1 text-xl text-white lg:p-0.5 lg:text-sm sm:rotate-90' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<div className='grid grid-cols-1 divide-y-4 border-y-4 border-black'>*/}
      {/*  <div className='flex w-full flex-col gap-10 bg-primary pb-12 sm:pl-5'>*/}
      {/*    <div className='w-full bg-black py-8'>*/}
      {/*      <h1 className='text-center text-[3rem] font-bold text-white'>*/}
      {/*        Sâmbătă*/}
      {/*      </h1>*/}
      {/*    </div>*/}
      {/*    <ul className='list-disc pl-10 sm:pl-4'>*/}
      {/*      <li className='text-xl font-medium md:text-base'>*/}
      {/*        16:00 - Deschiderea festivă - Aula*/}
      {/*      </li>*/}
      {/*      <li className='text-xl font-medium md:text-base'>*/}
      {/*        16:00 - Deschiderea festivă - Aula*/}
      {/*      </li>*/}
      {/*      <li className='text-xl font-medium md:text-base'>*/}
      {/*        16:00 - Deschiderea festivă - Aula*/}
      {/*      </li>*/}
      {/*      <li className='text-xl font-medium md:text-base'>*/}
      {/*        16:00 - Deschiderea festivă - Aula*/}
      {/*      </li>*/}
      {/*      <li className='text-xl font-medium md:text-base'>*/}
      {/*        16:00 - Deschiderea festivă - Aula*/}
      {/*      </li>*/}
      {/*    </ul>*/}
      {/*  </div>*/}
      {/*  <div className='flex w-full flex-col gap-10 bg-primary pb-12 sm:pl-5'>*/}
      {/*    <div className='w-full bg-black py-8'>*/}
      {/*      <h1 className='text-center text-[3rem] font-bold text-white'>*/}
      {/*        Duminică*/}
      {/*      </h1>*/}
      {/*    </div>*/}
      {/*    <ul className='list-disc pl-10 sm:pl-4'>*/}
      {/*      <li className='text-xl font-medium md:text-base'>*/}
      {/*        16:00 - Deschiderea festivă - Aula*/}
      {/*      </li>*/}
      {/*      <li className='text-xl font-medium md:text-base'>*/}
      {/*        16:00 - Deschiderea festivă - Aula*/}
      {/*      </li>*/}
      {/*      <li className='text-xl font-medium md:text-base'>*/}
      {/*        16:00 - Deschiderea festivă - Aula*/}
      {/*      </li>*/}
      {/*      <li className='text-xl font-medium md:text-base'>*/}
      {/*        16:00 - Deschiderea festivă - Aula*/}
      {/*      </li>*/}
      {/*      <li className='text-xl font-medium md:text-base'>*/}
      {/*        16:00 - Deschiderea festivă - Aula*/}
      {/*      </li>*/}
      {/*    </ul>*/}
      {/*  </div>*/}
      {/*  <div className='flex w-full flex-col gap-10 bg-primary pb-12 sm:pl-5'>*/}
      {/*    <div className='w-full bg-black py-8'>*/}
      {/*      <h1 className='text-center text-[3rem] font-bold text-white'>*/}
      {/*        Luni*/}
      {/*      </h1>*/}
      {/*    </div>*/}
      {/*    <ul className='list-disc pl-10 sm:pl-4'>*/}
      {/*      <li className='text-xl font-medium md:text-base'>*/}
      {/*        16:00 - Deschiderea festivă - Aula*/}
      {/*      </li>*/}
      {/*      <li className='text-xl font-medium md:text-base'>*/}
      {/*        16:00 - Deschiderea festivă - Aula*/}
      {/*      </li>*/}
      {/*      <li className='text-xl font-medium md:text-base'>*/}
      {/*        16:00 - Deschiderea festivă - Aula*/}
      {/*      </li>*/}
      {/*      <li className='text-xl font-medium md:text-base'>*/}
      {/*        16:00 - Deschiderea festivă - Aula*/}
      {/*      </li>*/}
      {/*      <li className='text-xl font-medium md:text-base'>*/}
      {/*        16:00 - Deschiderea festivă - Aula*/}
      {/*      </li>*/}
      {/*    </ul>*/}
      {/*  </div>*/}
      {/*  <div className='flex w-full flex-col gap-10 bg-primary pb-12 sm:pl-5'>*/}
      {/*    <div className='w-full bg-black py-8'>*/}
      {/*      <h1 className='text-center text-[3rem] font-bold text-white'>*/}
      {/*        Marți*/}
      {/*      </h1>*/}
      {/*    </div>*/}
      {/*    <ul className='list-disc pl-10 sm:pl-4'>*/}
      {/*      <li className='text-xl font-medium md:text-base'>*/}
      {/*        16:00 - Deschiderea festivă - Aula*/}
      {/*      </li>*/}
      {/*      <li className='text-xl font-medium md:text-base'>*/}
      {/*        16:00 - Deschiderea festivă - Aula*/}
      {/*      </li>*/}
      {/*      <li className='text-xl font-medium md:text-base'>*/}
      {/*        16:00 - Deschiderea festivă - Aula*/}
      {/*      </li>*/}
      {/*      <li className='text-xl font-medium md:text-base'>*/}
      {/*        16:00 - Deschiderea festivă - Aula*/}
      {/*      </li>*/}
      {/*      <li className='text-xl font-medium md:text-base'>*/}
      {/*        16:00 - Deschiderea festivă - Aula*/}
      {/*      </li>*/}
      {/*    </ul>*/}
      {/*  </div>*/}
      {/*  <div className='flex w-full flex-col gap-10 bg-primary pb-12 sm:pl-5'>*/}
      {/*    <div className='w-full bg-black py-8'>*/}
      {/*      <h1 className='text-center text-[3rem] font-bold text-white'>*/}
      {/*        Miercuri*/}
      {/*      </h1>*/}
      {/*    </div>*/}
      {/*    <ul className='list-disc pl-10 sm:pl-4'>*/}
      {/*      <li className='text-xl font-medium md:text-base'>*/}
      {/*        16:00 - Deschiderea festivă - Aula*/}
      {/*      </li>*/}
      {/*      <li className='text-xl font-medium md:text-base'>*/}
      {/*        16:00 - Deschiderea festivă - Aula*/}
      {/*      </li>*/}
      {/*      <li className='text-xl font-medium md:text-base'>*/}
      {/*        16:00 - Deschiderea festivă - Aula*/}
      {/*      </li>*/}
      {/*      <li className='text-xl font-medium md:text-base'>*/}
      {/*        16:00 - Deschiderea festivă - Aula*/}
      {/*      </li>*/}
      {/*      <li className='text-xl font-medium md:text-base'>*/}
      {/*        16:00 - Deschiderea festivă - Aula*/}
      {/*      </li>*/}
      {/*    </ul>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </main>
  );
}

export default Program;
