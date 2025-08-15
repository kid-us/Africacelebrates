const SectionTitle = ({ label }: { label: string }) => {
  return (
    <p className="border border-primary/20 rounded-full px-4 py-2 w-52 text-center text-white bg-secondary/8 mb-10 mx-5 lg:mx-0">
      {label}
    </p>
  );
};

export default SectionTitle;
