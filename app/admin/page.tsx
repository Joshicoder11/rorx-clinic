"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Appointment = {
  id: number;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  date: string;
  time: string;
  message: string;
};

type Message = {
  id: number;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function AdminPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const load = async () => {
      try {
        const [aRes, mRes] = await Promise.all([
          fetch('/api/appointments'),
          fetch('/api/contact'),
        ]);
        if (!aRes.ok || !mRes.ok) {
          throw new Error('Failed to fetch data');
        }
        const aData = await aRes.json();
        const mData = await mRes.json();
        setAppointments(aData.appointments || []);
        setMessages(mData.messages || []);
      } catch (err) {
        setError('Unable to load admin data.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <p className="text-xs uppercase font-semibold text-slate-500">Admin Dashboard</p>
            <h1 className="text-3xl font-bold text-slate-900 mt-1">Appointments & Messages</h1>
            <p className="mt-2 text-slate-600">View submissions collected through the website forms.</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={async () => {
                await fetch("/api/auth/logout", { method: "POST" });
                router.push("/admin/login");
              }}
              className="text-sm font-semibold text-white bg-red-600 px-3 py-2 rounded-md hover:bg-red-700"
            >
              Sign Out
            </button>
            <a
              href="/"
              className="text-sm font-semibold text-blue-700 border border-blue-700 px-3 py-2 rounded-md hover:bg-blue-50"
            >
              Go to Home
            </a>
          </div>
        </div>

        {loading ? (
          <div className="p-10 text-center text-slate-600">Loading data...</div>
        ) : error ? (
          <div className="p-4 rounded-lg bg-red-50 text-red-700">{error}</div>
        ) : (
          <div className="space-y-8">
            <section className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-slate-900">Appointments ({appointments.length})</h2>
              </div>
              {appointments.length === 0 ? (
                <p className="text-slate-600">No appointments submitted yet.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-slate-200 text-slate-700">
                      <tr>
                        <th className="px-2 py-2">Date</th>
                        <th className="px-2 py-2">Name</th>
                        <th className="px-2 py-2">Email</th>
                        <th className="px-2 py-2">Phone</th>
                        <th className="px-2 py-2">Department</th>
                        <th className="px-2 py-2">Appointment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map((item) => (
                        <tr key={item.id} className="border-b border-slate-200">
                          <td className="px-2 py-2 text-xs text-slate-500">{new Date(item.createdAt).toLocaleString()}</td>
                          <td className="px-2 py-2">{item.name}</td>
                          <td className="px-2 py-2">{item.email}</td>
                          <td className="px-2 py-2">{item.phone}</td>
                          <td className="px-2 py-2">{item.department}</td>
                          <td className="px-2 py-2">{item.date} {item.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>

            <section className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-slate-900">Contact Messages ({messages.length})</h2>
              </div>
              {messages.length === 0 ? (
                <p className="text-slate-600">No messages submitted yet.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-slate-200 text-slate-700">
                      <tr>
                        <th className="px-2 py-2">Date</th>
                        <th className="px-2 py-2">Name</th>
                        <th className="px-2 py-2">Email</th>
                        <th className="px-2 py-2">Phone</th>
                        <th className="px-2 py-2">Subject</th>
                        <th className="px-2 py-2">Message</th>
                      </tr>
                    </thead>
                    <tbody>
                      {messages.map((item) => (
                        <tr key={item.id} className="border-b border-slate-200">
                          <td className="px-2 py-2 text-xs text-slate-500">{new Date(item.createdAt).toLocaleString()}</td>
                          <td className="px-2 py-2">{item.name}</td>
                          <td className="px-2 py-2">{item.email}</td>
                          <td className="px-2 py-2">{item.phone}</td>
                          <td className="px-2 py-2">{item.subject}</td>
                          <td className="px-2 py-2">{item.message}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
