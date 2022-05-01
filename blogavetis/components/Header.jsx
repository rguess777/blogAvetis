import Link from "next/link";
import Button from "./Button";
const Header = () => {
  return (
    <div className=" w-full h-12 ">
        
      <div className="float-left align-baseline">
          
        <h1 className="text-3xl">Mon Blog</h1>  
      </div>  
      <div className="flex justify-end">
          
        <Link href="/signup" passHref>
            
          <a>
              
            <Button type="button" variant="none">
                
              Sign UP  
            </Button>  
          </a>  
        </Link>  
        <Link href="/signin" passHref>
            
          <a>
              
            <Button type="button" variant="primary">
                
              Sign In  
            </Button>  
          </a>  
        </Link>  
      </div>  
    </div>
  );
};
export default Header;