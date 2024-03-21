import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
 
export default function AboutYouForm() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="address">Your most recent adress</Label>
      <Input type="address" id="address" placeholder="Address" />
    </div>
  )
}