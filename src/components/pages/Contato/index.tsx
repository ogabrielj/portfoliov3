import React from 'react'

const ContatoComponent = () => {
    return (
        <section id="contato" className='mt-16 flex flex-col max-w-5xl items-center justify-center'>

            <div className='mb-10 flex justify-center items-center'>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 9.93329C4 8.13009 5.568 6.66663 7.5 6.66663H28.5C30.432 6.66663 32 8.13009 32 9.93329V22.0666C32 22.933 31.6313 23.7639 30.9749 24.3765C30.3185 24.9891 29.4283 25.3333 28.5 25.3333H7.5C6.57174 25.3333 5.6815 24.9891 5.02513 24.3765C4.36875 23.7639 4 22.933 4 22.0666V9.93329ZM7.5 8.53329C7.10218 8.53329 6.72064 8.68079 6.43934 8.94334C6.15804 9.20589 6 9.56199 6 9.93329V22.0666C6 22.8394 6.672 23.4666 7.5 23.4666H28.5C28.8978 23.4666 29.2794 23.3191 29.5607 23.0566C29.842 22.794 30 22.4379 30 22.0666V9.93329C30 9.56199 29.842 9.20589 29.5607 8.94334C29.2794 8.68079 28.8978 8.53329 28.5 8.53329H7.5ZM21 12.2666C20.7348 12.2666 20.4804 12.365 20.2929 12.54C20.1054 12.715 20 12.9524 20 13.2C20 13.4475 20.1054 13.6849 20.2929 13.8599C20.4804 14.035 20.7348 14.1333 21 14.1333H27C27.2652 14.1333 27.5196 14.035 27.7071 13.8599C27.8946 13.6849 28 13.4475 28 13.2C28 12.9524 27.8946 12.715 27.7071 12.54C27.5196 12.365 27.2652 12.2666 27 12.2666H21ZM21 17.8666C20.7348 17.8666 20.4804 17.965 20.2929 18.14C20.1054 18.315 20 18.5524 20 18.8C20 19.0475 20.1054 19.2849 20.2929 19.4599C20.4804 19.635 20.7348 19.7333 21 19.7333H27C27.2652 19.7333 27.5196 19.635 27.7071 19.4599C27.8946 19.2849 28 19.0475 28 18.8C28 18.5524 27.8946 18.315 27.7071 18.14C27.5196 17.965 27.2652 17.8666 27 17.8666H21ZM12.522 15.4661C12.8784 15.4661 13.2313 15.4006 13.5606 15.2733C13.8899 15.146 14.1891 14.9594 14.4411 14.7242C14.6931 14.489 14.893 14.2097 15.0294 13.9024C15.1658 13.5951 15.236 13.2657 15.236 12.933C15.236 12.6004 15.1658 12.271 15.0294 11.9637C14.893 11.6563 14.6931 11.3771 14.4411 11.1419C14.1891 10.9067 13.8899 10.7201 13.5606 10.5928C13.2313 10.4655 12.8784 10.4 12.522 10.4C11.8022 10.4 11.1119 10.6668 10.6029 11.1419C10.0939 11.6169 9.808 12.2612 9.808 12.933C9.808 13.6048 10.0939 14.2491 10.6029 14.7242C11.1119 15.1992 11.8022 15.4661 12.522 15.4661ZM9.716 16.7317C9.26089 16.7317 8.82442 16.9004 8.5026 17.2008C8.18079 17.5011 8 17.9085 8 18.3333C8.00007 19.0285 8.24909 19.7037 8.70751 20.2516C9.16592 20.7995 9.8074 21.1887 10.53 21.3573L10.636 21.3834C11.876 21.6728 13.17 21.6728 14.408 21.3834L14.516 21.3592C15.2386 21.1906 15.8801 20.8014 16.3385 20.2535C16.7969 19.7055 17.0459 19.0303 17.046 18.3352C17.0463 18.1247 17.0021 17.9162 16.916 17.7217C16.8298 17.5272 16.7035 17.3504 16.5441 17.2014C16.3847 17.0525 16.1955 16.9344 15.9871 16.8538C15.7788 16.7732 15.5555 16.7317 15.33 16.7317H9.716Z" fill="black" />
              </svg>


              <h1 className='text-[24px] font-semibold pl-2'>Contato</h1>
            </div>
            <div>

              <p className='text-center'>Que tal me mandar um Oi? Vamos conversar, conversar sobre o que é melhor para o seu projeto. Venha fazer um orçamento comigo, tirar dúvidas ou algo do gênero. Pode me mandar um e-mail, fique a vontade :)</p>

              <div className="flex items-center justify-center">
                <a href='mailto:gabaissues@gmail.com' className="mt-5 flex rounded-full w-52 items-center justify-center p-4 bg-purple text-[#fff] font-semibold">Me manda um Oi!</a>
              </div>
            </div>

          </section>
    )
}

export default ContatoComponent;