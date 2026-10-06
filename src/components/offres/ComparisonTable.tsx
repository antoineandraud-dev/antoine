import { Icon } from "@/components/ui/Icon";
import { comparisonRows, type Cell } from "./data";

function CellContent({ cell }: { cell: Cell }) {
  return cell.content === "check" ? (
    <Icon name="check_circle" filled className="text-primary text-[20px]" />
  ) : (
    <>{cell.content}</>
  );
}

export function ComparisonTable() {
  return (
    <section className="w-full max-w-[1180px] mx-auto px-gutter-mobile lg:px-gutter pb-space-2xl">
      <div className="flex flex-col items-center text-center mb-space-xl">
        <span className="font-label-pill text-label-pill uppercase text-secondary font-bold tracking-wider">
          Détail technique
        </span>
        <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight mt-1">
          Comparatif exhaustif des prestations
        </h2>
      </div>
      <div className="w-full bg-surface-container-lowest rounded-3xl p-space-md md:p-space-lg shadow-sm overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[720px]">
          <thead>
            <tr className="bg-surface-container-low rounded-xl">
              <th className="py-space-md px-space-md font-label-md text-label-md text-on-surface uppercase rounded-l-ds-xl">
                Fonctionnalité clé
              </th>
              <th className="py-space-md px-space-md font-label-md text-label-md text-on-surface text-center">
                Site Vitrine SEO
              </th>
              <th className="py-space-md px-space-md font-label-md text-label-md text-on-surface text-center bg-primary-container/20">
                Pack Première Page
              </th>
              <th className="py-space-md px-space-md font-label-md text-label-md text-on-surface text-center rounded-r-ds-xl">
                Domination Fiche Google
              </th>
            </tr>
          </thead>
          <tbody className="font-body-sm text-body-sm text-on-surface">
            {comparisonRows.map(([label, a, b, c], index) => {
              const last = index === comparisonRows.length - 1;
              return (
                <tr
                  key={label}
                  className={`hover:bg-surface-container-low/50 transition-colors ${
                    index % 2 === 1 ? "bg-surface-container-low/30" : ""
                  }`}
                >
                  <td className={`py-space-md px-space-md font-semibold ${last ? "rounded-bl-ds-xl" : ""}`}>{label}</td>
                  <td className={`py-space-md px-space-md text-center ${a.className ?? ""}`}>
                    <CellContent cell={a} />
                  </td>
                  <td className={`py-space-md px-space-md text-center bg-primary-container/10 ${b.className ?? ""}`}>
                    <CellContent cell={b} />
                  </td>
                  <td
                    className={`py-space-md px-space-md text-center ${c.className ?? ""} ${
                      last ? "rounded-br-ds-xl" : ""
                    }`}
                  >
                    <CellContent cell={c} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
