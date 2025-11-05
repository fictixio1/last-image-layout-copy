import dogCube from "@/assets/dog-cube.png";
import timesSquareBefore from "@/assets/times-square-before.png";
import timesSquareAfter from "@/assets/times-square-after.png";

const Index = () => {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <h1 className="text-center text-foreground text-xl mb-12">
          introducing... the times square dog
        </h1>

        {/* Dog Cube Image */}
        <div className="flex justify-center mb-8">
          <img 
            src={dogCube} 
            alt="Times Square Dog Cube" 
            className="w-64 h-auto"
          />
        </div>

        {/* Social Handle */}
        <p className="text-center text-foreground mb-16">
          @timessquaredog on X
        </p>

        {/* Description */}
        <p className="text-center text-foreground mb-16 px-4">
          we are using 100% of the creator fees to put this dog on times square
        </p>

        {/* Before Section */}
        <div className="mb-12">
          <h2 className="text-center text-foreground mb-6">
            time square now:
          </h2>
          <div className="w-full">
            <img 
              src={timesSquareBefore} 
              alt="Times Square before" 
              className="w-full h-auto rounded-sm"
            />
          </div>
        </div>

        {/* After Section */}
        <div className="mb-12">
          <h2 className="text-center text-foreground mb-6">
            time square after the dog:
          </h2>
          <div className="w-full">
            <img 
              src={timesSquareAfter} 
              alt="Times Square after with dog" 
              className="w-full h-auto rounded-sm"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
