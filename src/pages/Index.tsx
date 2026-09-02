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
          <a 
            href="https://x.com/timesquaredogrh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:opacity-70 transition-opacity"
          >
            @timesquaredogrh
          </a>
          {" "}on X
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

        {/* About Section */}
        <div className="mb-16 px-4">
          <h2 className="text-center text-foreground text-lg mb-6">
            how this will happen
          </h2>
          <div className="space-y-4 text-center text-foreground max-w-xl mx-auto">
            <p>
              we are planning to get as many billboards as we can in times square
            </p>
            <p>
              billboard bookings start at just $150 through{" "}
              <a 
                href="https://timessquarebillboard.com/book-now/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:opacity-70 transition-opacity"
              >
                timessquarebillboard.com
              </a>
            </p>
            <p>
              we're also reaching out to{" "}
              <a 
                href="https://www.timessquarenyc.org/business-community/advertisement-sponsorships" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:opacity-70 transition-opacity"
              >
                times square alliance
              </a>
              {" "}and{" "}
              <a 
                href="https://clearchanneloutdoor.com/where-we-are/times-square/#contact" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:opacity-70 transition-opacity"
              >
                clear channel outdoor
              </a>
            </p>
            <p>
              100% of creator fees go directly to putting this dog on as many screens as possible
            </p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Index;
