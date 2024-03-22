import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/ui/card";
import { Label } from "@/ui/label";
import { Input } from "@/ui/input";
import { Textarea } from "@/ui/textarea";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/ui/select";
import { Button } from "@/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/ui/table";

export function Form() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between lg:gap-8">
      <div className="grid gap-2">
        <Card>
          <CardHeader>
            <CardTitle>Cadastrar um novo produto</CardTitle>
            <CardDescription>Preencha os detalhes abaixo</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label className="text-sm" htmlFor="name">
                Nome do Produto
              </Label>
              <Input id="name" required />
            </div>
            <div className="grid gap-2">
              <Label className="text-sm" htmlFor="description">
                Descrição do Produto
              </Label>
              <Textarea
                id="description"
                placeholder="Insira a descrição do produto"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label className="text-sm" htmlFor="value">
                Valor do Produto
              </Label>
              <Input id="value" required type="number" />
            </div>
            <div className="grid gap-2">
              <Label className="text-sm" htmlFor="sale">
                Disponível para venda
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent className="w-[calc(100%_1px)]">
                  <SelectItem value="yes">Sim</SelectItem>
                  <SelectItem value="no">Não</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto">Cadastrar</Button>
          </CardFooter>
        </Card>
      </div>
      <div className="grid gap-4">
        <Card>
          <CardHeader className="flex items-center gap-2">
            <CardTitle>Produtos</CardTitle>
            <Button>Novo produto</Button>
          </CardHeader>
          <CardContent className="p-0">
            <Table className="rounded-b-none">
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Lâmpadas Glimmer</TableCell>
                  <TableCell>$250</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Filtros Aqua</TableCell>
                  <TableCell>$150</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Plantadores Eco</TableCell>
                  <TableCell>$100</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Espremedores Zest</TableCell>
                  <TableCell>$200</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Vestíveis Flexi</TableCell>
                  <TableCell>$300</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
