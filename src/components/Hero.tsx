import Logo from '../assets/hero2.png'
import LogoText from '../assets/zenete.png'
export default function Hero() {
    return <div className='relative z-10'>

        <div className="flex justify-between  gap-6">
           
                    <a className="text-sm sm:text-sm text-auto" target="_blank" href="https://solscan.io/token/3JY6jH32DXPrVv247abQDYeYGQy9BQv6QCXDSNigpump">
                    3JY6jH3....Nigpump
                    </a>
                    <div className="flex gap-4 items-center text-2xl">
                            <a href="https://t.me/zenet0x" target="_blank" >
                                    <Telegram/>
                            </a>
                            <a href="https://x.com/zenet0x" target="_blank" >
                                    <Twitter/>
                            </a>
                    </div>  
            
        </div>

        <div>
            <img src={Logo} className='mx-auto max-w-[400px] w-full' />
        </div>

    </div>
}





export const Telegram = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
  <path fill="currentColor" d="M8 0C3.581 0 0 3.581 0 8s3.581 8 8 8s8-3.581 8-8s-3.581-8-8-8zm3.931 5.484l-1.313 6.184c-.091.441-.356.544-.725.341l-2-1.478l-.959.934c-.112.109-.2.2-.4.2c-.259 0-.216-.097-.303-.344L5.55 9.084l-1.978-.616c-.428-.131-.431-.425.097-.634l7.706-2.975c.35-.159.691.084.556.625z"></path>
</svg>
  )

  export const Twitter = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14" {...props}>
  <path fill="currentColor" d="M7 0c3.87 0 7 3.13 7 7s-3.13 7-7 7s-7-3.13-7-7s3.13-7 7-7ZM5.72 10.69c3.1 0 4.8-2.57 4.8-4.8v-.22c.33-.24.62-.54.84-.88c-.3.13-.63.22-.97.27c.35-.21.62-.54.74-.93c-.33.19-.69.33-1.07.41c-.31-.33-.75-.53-1.23-.53c-.93 0-1.69.76-1.69 1.69c0 .13.01.26.05.38c-1.4-.07-2.65-.74-3.48-1.76c-.14.25-.23.54-.23.85c0 .58.3 1.1.75 1.4c-.28 0-.54-.08-.76-.21v.02c0 .82.58 1.5 1.35 1.66c-.14.04-.29.06-.44.06c-.11 0-.21-.01-.32-.03c.21.67.84 1.16 1.57 1.17c-.58.45-1.31.72-2.1.72c-.14 0-.27 0-.4-.02c.74.48 1.63.76 2.58.76" className="cls-1"></path>
</svg>
  )