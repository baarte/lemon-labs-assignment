export default function Notification({ message }: { message: string }) {
  return (
    <div className="flex items-center justify-center text-sm text-primary text-center font-semibold px-2.5 py-1.5 min-h-[37px] w-full border-2 border-primary rounded-sm">
      {message}
    </div>
  );
}
