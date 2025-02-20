
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const BookingForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Nouvelle réservation</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="driver">Conducteur</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez le conducteur" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="john">John Doe</SelectItem>
                <SelectItem value="jane">Jane Smith</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="vehicle">Véhicule</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez le véhicule" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="a025">A025 - Toyota Yaris</SelectItem>
                <SelectItem value="a030">A030 - Renault Clio</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="start">Date de début</Label>
              <Input type="datetime-local" id="start" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="end">Date de fin</Label>
              <Input type="datetime-local" id="end" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="justify-end">
        <Button>Réserver</Button>
      </CardFooter>
    </Card>
  );
};
