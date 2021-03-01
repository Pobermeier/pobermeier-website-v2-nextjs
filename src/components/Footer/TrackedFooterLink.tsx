import Link from 'next/link';

const TrackedFooterLink: React.FC<Props> = ({ route, id, caption }) => {
  return (
    <strong>
      <Link href={route}>
        <a className="gtm-tracked-link" id={id}>
          {caption}
        </a>
      </Link>
    </strong>
  );
};

interface Props {
  route: string;
  id: string;
  caption: string;
}

export default TrackedFooterLink;
