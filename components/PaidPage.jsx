import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "./ui/checkbox";

export function PaidPage({ device_id }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Checkbox id="terms" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Paid</DialogTitle>
          <DialogDescription className="p-3 flex gap-2"></DialogDescription>
        </DialogHeader>
        <label htmlFor="terms">
          Paid For <p className="text-red-500 font-bold">{device_id}</p>
        </label>
        <DialogFooter>
          <Button>Done</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
