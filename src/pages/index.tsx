type Props = {
    title: string;
};

export default function Home({ title = "React Ec" }: Props) {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
}
