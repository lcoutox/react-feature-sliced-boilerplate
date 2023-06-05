import { Button } from "@/shared/ui/button";

export default function HomePage() {
    return (
        <div className='min-h-screen flex flex-1 items-center justify-center text-center p-4'>
            <div className='max-w-lg'>
                <h1 className='text-primary font text-4xl font-black'>Welcome to Feature Sliced Boilerplate!</h1>
                <div className='mt-4 flex items-center text-center justify-center'>
                    <Button onClick={() => window.location.href = 'https://github.com/lcoutox/react-feature-sliced-boilerplate'}>
                        Clone the repository.
                    </Button>
                </div>
            </div>
        </div>
    )
}