import { Button } from "@mui/material";
import { getServerSession } from "next-auth";
import DateReserve from "@/components/DateReserve";
import getUserProfile from "@/libs/getUserProfile";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function BookingPage() {
    const session = await getServerSession(authOptions);
    const profile = session ? await getUserProfile(session.user.token) : null;
    const createdAt = profile ? new Date(profile.data.createdAt) : null;

    return (
        <main className="min-h-[calc(100vh-4rem)] bg-neutral-50 px-6 py-16
        flex flex-col items-center gap-8">
            {
                profile ?
                <div className="w-full max-w-[520px] rounded-md bg-white
                px-12 py-6 shadow-md text-neutral-800">
                    <div className="text-2xl">{profile.data.name}</div>
                    <table className="mt-3">
                        <tbody>
                            <tr><td className="pr-4">Email</td>
                            <td>{profile.data.email}</td></tr>
                            <tr><td className="pr-4">Tel.</td>
                            <td>{profile.data.tel}</td></tr>
                            <tr><td className="pr-4">Member Since</td>
                            <td>{createdAt?.toString()}</td></tr>
                        </tbody>
                    </table>
                </div>
                : null
            }

            <form className="w-full max-w-[520px] rounded-md bg-white
            px-12 py-10 shadow-md">
                <h1 className="mb-10 text-5xl font-light text-neutral-800">
                    Venue Booking
                </h1>

                <DateReserve />

                <Button
                type="submit"
                name="Book Venue"
                variant="contained"
                fullWidth
                sx={{marginTop: "2.5rem", paddingY: "0.6rem"}}>
                    Book Venue
                </Button>
            </form>
        </main>
    );
}
