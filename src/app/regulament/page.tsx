export default function Regulament() {
  return (
    <main className='flex flex-col gap-8 px-16 pb-16 pt-36 sm:px-4'>
      {/*<div className='relative flex w-full flex-col items-center bg-cover'>*/}
      {/*  <img*/}
      {/*    className='absolute z-[0] h-full w-full rounded-[1.25rem] object-cover [filter:brightness(65%)]'*/}
      {/*    src='/brasov4.jpeg'*/}
      {/*    alt='Brasov'*/}
      {/*  />*/}
      {/*  <div className='mb-48 mt-48 flex w-[80%] max-w-[60rem] flex-col items-center'>*/}
      <h1 className='relative z-10 text-[3rem] font-bold text-center md:text-3xl'>
        Regulament
      </h1>
      <embed src="https://firebasestorage.googleapis.com/v0/b/olimpiada-istorie-2024.appspot.com/o/Ragulament%20specific%20Olimpiada%20de%20Istorie%202024.pdf?alt=media&token=92a20ea6-eaee-4ae7-920c-bb7bcfa9f8c3" type="application/pdf" height="1000" />
      {/*</div>*/}
      {/*</div>*/}
    </main>
  );
}
