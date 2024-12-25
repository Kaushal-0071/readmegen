import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export function AnalyzerCard() {
  return (
    (<Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Analyze Repository</CardTitle>
        <CardDescription>Enter your GitHub repo link and Gemini API key to analyze the repository.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="repo-link"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            GitHub Repo Link
          </label>
          <Input id="repo-link" type="url" placeholder="https://github.com/username/repo" />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="api-key"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Gemini API Key
          </label>
          <Input id="api-key" type="password" placeholder="Enter your Gemini API key" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Analyze Repository</Button>
      </CardFooter>
    </Card>)
  );
}

