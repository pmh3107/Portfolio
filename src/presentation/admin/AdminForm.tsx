"use client";

import { useState } from "react";
import type { PortfolioProfile } from "@/domain/portfolio";
import type { Dictionary } from "@/i18n/get-dictionary";

interface AdminFormProps {
  dictionary: Dictionary;
  initialData: PortfolioProfile;
}

export function AdminForm({ dictionary, initialData }: AdminFormProps) {
  const [profile, setProfile] = useState<PortfolioProfile>(initialData);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const onSave = async () => {
    try {
      setSaving(true);
      setMessage("");
      const response = await fetch("/api/admin/portfolio", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile),
      });

      if (!response.ok) {
        throw new Error("save_failed");
      }

      setMessage(dictionary.admin.success);
    } catch {
      setMessage(dictionary.admin.error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <section className="grid gap-4 rounded-2xl border border-white/15 bg-slate-900/40 p-5 md:grid-cols-2">
        <label className="text-sm">
          <span className="mb-1 block text-slate-300">Name</span>
          <input value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} className="w-full rounded-lg border border-white/20 bg-slate-950 px-3 py-2" />
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-slate-300">Avatar path (public)</span>
          <input value={profile.avatar.src} onChange={(e) => setProfile({ ...profile, avatar: { ...profile.avatar, src: e.target.value } })} className="w-full rounded-lg border border-white/20 bg-slate-950 px-3 py-2" />
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-slate-300">Title (VI)</span>
          <input value={profile.title.vi} onChange={(e) => setProfile({ ...profile, title: { ...profile.title, vi: e.target.value } })} className="w-full rounded-lg border border-white/20 bg-slate-950 px-3 py-2" />
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-slate-300">Title (EN)</span>
          <input value={profile.title.en} onChange={(e) => setProfile({ ...profile, title: { ...profile.title, en: e.target.value } })} className="w-full rounded-lg border border-white/20 bg-slate-950 px-3 py-2" />
        </label>
        <label className="text-sm md:col-span-2">
          <span className="mb-1 block text-slate-300">Bio (VI)</span>
          <textarea value={profile.about.vi} onChange={(e) => setProfile({ ...profile, about: { ...profile.about, vi: e.target.value } })} className="min-h-24 w-full rounded-lg border border-white/20 bg-slate-950 px-3 py-2" />
        </label>
        <label className="text-sm md:col-span-2">
          <span className="mb-1 block text-slate-300">Bio (EN)</span>
          <textarea value={profile.about.en} onChange={(e) => setProfile({ ...profile, about: { ...profile.about, en: e.target.value } })} className="min-h-24 w-full rounded-lg border border-white/20 bg-slate-950 px-3 py-2" />
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-slate-300">Email</span>
          <input value={profile.contact.email} onChange={(e) => setProfile({ ...profile, contact: { ...profile.contact, email: e.target.value } })} className="w-full rounded-lg border border-white/20 bg-slate-950 px-3 py-2" />
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-slate-300">Phone</span>
          <input value={profile.contact.phone} onChange={(e) => setProfile({ ...profile, contact: { ...profile.contact, phone: e.target.value } })} className="w-full rounded-lg border border-white/20 bg-slate-950 px-3 py-2" />
        </label>
      </section>

      <section className="rounded-2xl border border-white/15 bg-slate-900/40 p-5">
        <p className="mb-2 text-sm text-slate-300">JSON editor (social links, skills, projects, education)</p>
        <textarea
          value={JSON.stringify(
            {
              links: profile.links,
              skills: profile.skills,
              experience: profile.experience,
              education: profile.education,
            },
            null,
            2,
          )}
          onChange={(e) => {
            try {
              const parsed = JSON.parse(e.target.value) as Pick<PortfolioProfile, "links" | "skills" | "experience" | "education">;
              setProfile({ ...profile, ...parsed });
            } catch {
              // Keep invalid JSON as-is for editing; save will preserve last valid object.
            }
          }}
          className="min-h-72 w-full rounded-lg border border-white/20 bg-slate-950 px-3 py-2 font-mono text-xs"
        />
      </section>

      <div className="flex items-center gap-3">
        <button onClick={onSave} disabled={saving} className="rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900 disabled:opacity-60">
          {saving ? dictionary.admin.saving : dictionary.admin.save}
        </button>
        {message ? <p className="text-sm text-slate-200">{message}</p> : null}
      </div>
    </div>
  );
}
