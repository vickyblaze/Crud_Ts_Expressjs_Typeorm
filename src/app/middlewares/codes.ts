class Codes {
  ok = (): number => 200;
  created = (): number => 201;
  conflict = (): number => 409;
  error = (): number => 400;
  notFound = (): number => 404;
  internalserverError= ():number => 500;
}

export default Codes;