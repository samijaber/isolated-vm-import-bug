// This hack works
// const ivm = eval("require")("isolated-vm");

// this approach won't work
import ivm from "isolated-vm";

const evaluator = (code: string) => {
  const isolate = new ivm.Isolate({
    memoryLimit: 128,
  });
  const context = isolate.createContextSync();
  const script = isolate.compileScriptSync("1 + 2");
  const result = script.runSync(context);
  return result;
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Testing evaluate:
        {evaluator("1+123")}
      </div>
    </main>
  );
}
