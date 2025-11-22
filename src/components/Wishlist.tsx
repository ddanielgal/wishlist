import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "./ui/item";

export default function Wishlist() {
  return (
    <ol className="space-y-4">
      <Item variant="outline">
        <ItemMedia variant="image" className="size-36">
          <img
            src="https://placehold.co/144x144"
            alt="Placeholder"
            width={144}
            height={144}
            loading="lazy"
            className="aspect-square object-cover"
          />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Item title</ItemTitle>
          <ItemDescription>Item Description.</ItemDescription>
        </ItemContent>
      </Item>
    </ol>
  );
}
