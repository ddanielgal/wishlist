import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function Wishlist() {
  return (
    <ol className="space-y-4">
      <li>
        <Card>
          <CardHeader>
            <CardTitle>Item title</CardTitle>
            <CardDescription>Item Description.</CardDescription>
          </CardHeader>
        </Card>
      </li>
    </ol>
  );
}
