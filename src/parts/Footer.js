import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 flex text-center px-4 py-8 justify-center">
      <p className="text-sm">
        Copyright 2021 • All Rights Reserved LuxSpace by{" "}
        <a
          href="https://buildwithangga.com/"
          target="_blank"
          rel="noreferrer"
          className="underline">
          BuildWith Angga
        </a>{" "}
        <br />
        Remade 2022 • by{" "}
        <a
          href="https://github.com/ridwanfbnr/bwa-luxspace-react"
          target="_blank"
          className="underline"
          rel="noreferrer">
          Ridwan Febnur Asri Redinda
        </a>
      </p>
    </footer>
  );
}
