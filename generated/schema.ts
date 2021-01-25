// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Owner extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Owner entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Owner entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Owner", id.toString(), this);
  }

  static load(id: string): Owner | null {
    return store.get("Owner", id) as Owner | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get punkPurchased(): string | null {
    let value = this.get("punkPurchased");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set punkPurchased(value: string | null) {
    if (value === null) {
      this.unset("punkPurchased");
    } else {
      this.set("punkPurchased", Value.fromString(value as string));
    }
  }

  get punkAssigned(): string | null {
    let value = this.get("punkAssigned");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set punkAssigned(value: string | null) {
    if (value === null) {
      this.unset("punkAssigned");
    } else {
      this.set("punkAssigned", Value.fromString(value as string));
    }
  }

  get punkTransfered(): string | null {
    let value = this.get("punkTransfered");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set punkTransfered(value: string | null) {
    if (value === null) {
      this.unset("punkTransfered");
    } else {
      this.set("punkTransfered", Value.fromString(value as string));
    }
  }

  get punkBid(): string | null {
    let value = this.get("punkBid");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set punkBid(value: string | null) {
    if (value === null) {
      this.unset("punkBid");
    } else {
      this.set("punkBid", Value.fromString(value as string));
    }
  }

  get punkOfferedForSale(): string | null {
    let value = this.get("punkOfferedForSale");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set punkOfferedForSale(value: string | null) {
    if (value === null) {
      this.unset("punkOfferedForSale");
    } else {
      this.set("punkOfferedForSale", Value.fromString(value as string));
    }
  }

  get cTokenTransfered(): string | null {
    let value = this.get("cTokenTransfered");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set cTokenTransfered(value: string | null) {
    if (value === null) {
      this.unset("cTokenTransfered");
    } else {
      this.set("cTokenTransfered", Value.fromString(value as string));
    }
  }

  get transaction(): string | null {
    let value = this.get("transaction");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set transaction(value: string | null) {
    if (value === null) {
      this.unset("transaction");
    } else {
      this.set("transaction", Value.fromString(value as string));
    }
  }
}

export class CryptoPunk extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save CryptoPunk entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save CryptoPunk entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("CryptoPunk", id.toString(), this);
  }

  static load(id: string): CryptoPunk | null {
    return store.get("CryptoPunk", id) as CryptoPunk | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get punk(): BigInt {
    let value = this.get("punk");
    return value.toBigInt();
  }

  set punk(value: BigInt) {
    this.set("punk", Value.fromBigInt(value));
  }

  get OwnedBy(): string | null {
    let value = this.get("OwnedBy");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set OwnedBy(value: string | null) {
    if (value === null) {
      this.unset("OwnedBy");
    } else {
      this.set("OwnedBy", Value.fromString(value as string));
    }
  }

  get bid(): string | null {
    let value = this.get("bid");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set bid(value: string | null) {
    if (value === null) {
      this.unset("bid");
    } else {
      this.set("bid", Value.fromString(value as string));
    }
  }

  get offer(): string | null {
    let value = this.get("offer");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set offer(value: string | null) {
    if (value === null) {
      this.unset("offer");
    } else {
      this.set("offer", Value.fromString(value as string));
    }
  }

  get purchase(): string | null {
    let value = this.get("purchase");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set purchase(value: string | null) {
    if (value === null) {
      this.unset("purchase");
    } else {
      this.set("purchase", Value.fromString(value as string));
    }
  }

  get punkTransfer(): string | null {
    let value = this.get("punkTransfer");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set punkTransfer(value: string | null) {
    if (value === null) {
      this.unset("punkTransfer");
    } else {
      this.set("punkTransfer", Value.fromString(value as string));
    }
  }

  get transaction(): string | null {
    let value = this.get("transaction");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set transaction(value: string | null) {
    if (value === null) {
      this.unset("transaction");
    } else {
      this.set("transaction", Value.fromString(value as string));
    }
  }
}

export class Bid extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Bid entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Bid entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Bid", id.toString(), this);
  }

  static load(id: string): Bid | null {
    return store.get("Bid", id) as Bid | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bidsByOwner(): string | null {
    let value = this.get("bidsByOwner");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set bidsByOwner(value: string | null) {
    if (value === null) {
      this.unset("bidsByOwner");
    } else {
      this.set("bidsByOwner", Value.fromString(value as string));
    }
  }

  get bidsByAssignee(): string | null {
    let value = this.get("bidsByAssignee");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set bidsByAssignee(value: string | null) {
    if (value === null) {
      this.unset("bidsByAssignee");
    } else {
      this.set("bidsByAssignee", Value.fromString(value as string));
    }
  }

  get punk(): string | null {
    let value = this.get("punk");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set punk(value: string | null) {
    if (value === null) {
      this.unset("punk");
    } else {
      this.set("punk", Value.fromString(value as string));
    }
  }

  get bidWithdrawn(): string | null {
    let value = this.get("bidWithdrawn");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set bidWithdrawn(value: string | null) {
    if (value === null) {
      this.unset("bidWithdrawn");
    } else {
      this.set("bidWithdrawn", Value.fromString(value as string));
    }
  }

  get bidder(): Bytes | null {
    let value = this.get("bidder");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set bidder(value: Bytes | null) {
    if (value === null) {
      this.unset("bidder");
    } else {
      this.set("bidder", Value.fromBytes(value as Bytes));
    }
  }

  get bid(): BigInt | null {
    let value = this.get("bid");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set bid(value: BigInt | null) {
    if (value === null) {
      this.unset("bid");
    } else {
      this.set("bid", Value.fromBigInt(value as BigInt));
    }
  }

  get transaction(): string | null {
    let value = this.get("transaction");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set transaction(value: string | null) {
    if (value === null) {
      this.unset("transaction");
    } else {
      this.set("transaction", Value.fromString(value as string));
    }
  }
}

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Transaction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Transaction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Transaction", id.toString(), this);
  }

  static load(id: string): Transaction | null {
    return store.get("Transaction", id) as Transaction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string | null {
    let value = this.get("owner");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set owner(value: string | null) {
    if (value === null) {
      this.unset("owner");
    } else {
      this.set("owner", Value.fromString(value as string));
    }
  }

  get ctoken(): string | null {
    let value = this.get("ctoken");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ctoken(value: string | null) {
    if (value === null) {
      this.unset("ctoken");
    } else {
      this.set("ctoken", Value.fromString(value as string));
    }
  }

  get punkTransfers(): string | null {
    let value = this.get("punkTransfers");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set punkTransfers(value: string | null) {
    if (value === null) {
      this.unset("punkTransfers");
    } else {
      this.set("punkTransfers", Value.fromString(value as string));
    }
  }

  get punk(): string | null {
    let value = this.get("punk");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set punk(value: string | null) {
    if (value === null) {
      this.unset("punk");
    } else {
      this.set("punk", Value.fromString(value as string));
    }
  }

  get assigned(): string | null {
    let value = this.get("assigned");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set assigned(value: string | null) {
    if (value === null) {
      this.unset("assigned");
    } else {
      this.set("assigned", Value.fromString(value as string));
    }
  }

  get offer(): string | null {
    let value = this.get("offer");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set offer(value: string | null) {
    if (value === null) {
      this.unset("offer");
    } else {
      this.set("offer", Value.fromString(value as string));
    }
  }

  get bid(): string | null {
    let value = this.get("bid");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set bid(value: string | null) {
    if (value === null) {
      this.unset("bid");
    } else {
      this.set("bid", Value.fromString(value as string));
    }
  }

  get date(): BigInt {
    let value = this.get("date");
    return value.toBigInt();
  }

  set date(value: BigInt) {
    this.set("date", Value.fromBigInt(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }
}

export class cToken extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save cToken entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save cToken entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("cToken", id.toString(), this);
  }

  static load(id: string): cToken | null {
    return store.get("cToken", id) as cToken | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get symbol(): string | null {
    let value = this.get("symbol");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set symbol(value: string | null) {
    if (value === null) {
      this.unset("symbol");
    } else {
      this.set("symbol", Value.fromString(value as string));
    }
  }

  get name(): string | null {
    let value = this.get("name");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (value === null) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(value as string));
    }
  }

  get address(): Bytes | null {
    let value = this.get("address");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set address(value: Bytes | null) {
    if (value === null) {
      this.unset("address");
    } else {
      this.set("address", Value.fromBytes(value as Bytes));
    }
  }

  get allPunksAssigned(): boolean {
    let value = this.get("allPunksAssigned");
    return value.toBoolean();
  }

  set allPunksAssigned(value: boolean) {
    this.set("allPunksAssigned", Value.fromBoolean(value));
  }

  get transfers(): string | null {
    let value = this.get("transfers");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set transfers(value: string | null) {
    if (value === null) {
      this.unset("transfers");
    } else {
      this.set("transfers", Value.fromString(value as string));
    }
  }

  get totalSupply(): BigInt | null {
    let value = this.get("totalSupply");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set totalSupply(value: BigInt | null) {
    if (value === null) {
      this.unset("totalSupply");
    } else {
      this.set("totalSupply", Value.fromBigInt(value as BigInt));
    }
  }

  get imageHash(): string | null {
    let value = this.get("imageHash");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set imageHash(value: string | null) {
    if (value === null) {
      this.unset("imageHash");
    } else {
      this.set("imageHash", Value.fromString(value as string));
    }
  }

  get transaction(): string | null {
    let value = this.get("transaction");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set transaction(value: string | null) {
    if (value === null) {
      this.unset("transaction");
    } else {
      this.set("transaction", Value.fromString(value as string));
    }
  }
}

export class Purchase extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Purchase entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Purchase entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Purchase", id.toString(), this);
  }

  static load(id: string): Purchase | null {
    return store.get("Purchase", id) as Purchase | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get purchaseBy(): string | null {
    let value = this.get("purchaseBy");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set purchaseBy(value: string | null) {
    if (value === null) {
      this.unset("purchaseBy");
    } else {
      this.set("purchaseBy", Value.fromString(value as string));
    }
  }

  get punkIndex(): BigInt {
    let value = this.get("punkIndex");
    return value.toBigInt();
  }

  set punkIndex(value: BigInt) {
    this.set("punkIndex", Value.fromBigInt(value));
  }

  get punk(): string | null {
    let value = this.get("punk");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set punk(value: string | null) {
    if (value === null) {
      this.unset("punk");
    } else {
      this.set("punk", Value.fromString(value as string));
    }
  }

  get buyer(): Bytes {
    let value = this.get("buyer");
    return value.toBytes();
  }

  set buyer(value: Bytes) {
    this.set("buyer", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get seller(): Bytes {
    let value = this.get("seller");
    return value.toBytes();
  }

  set seller(value: Bytes) {
    this.set("seller", Value.fromBytes(value));
  }

  get transaction(): string | null {
    let value = this.get("transaction");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set transaction(value: string | null) {
    if (value === null) {
      this.unset("transaction");
    } else {
      this.set("transaction", Value.fromString(value as string));
    }
  }
}

export class Assigned extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Assigned entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Assigned entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Assigned", id.toString(), this);
  }

  static load(id: string): Assigned | null {
    return store.get("Assigned", id) as Assigned | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get assignedTo(): string | null {
    let value = this.get("assignedTo");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set assignedTo(value: string | null) {
    if (value === null) {
      this.unset("assignedTo");
    } else {
      this.set("assignedTo", Value.fromString(value as string));
    }
  }

  get punkAssigned(): BigInt {
    let value = this.get("punkAssigned");
    return value.toBigInt();
  }

  set punkAssigned(value: BigInt) {
    this.set("punkAssigned", Value.fromBigInt(value));
  }

  get punksRemainingToAssign(): BigInt {
    let value = this.get("punksRemainingToAssign");
    return value.toBigInt();
  }

  set punksRemainingToAssign(value: BigInt) {
    this.set("punksRemainingToAssign", Value.fromBigInt(value));
  }

  get transaction(): string | null {
    let value = this.get("transaction");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set transaction(value: string | null) {
    if (value === null) {
      this.unset("transaction");
    } else {
      this.set("transaction", Value.fromString(value as string));
    }
  }
}

export class cTokenTransfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save cTokenTransfer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save cTokenTransfer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("cTokenTransfer", id.toString(), this);
  }

  static load(id: string): cTokenTransfer | null {
    return store.get("cTokenTransfer", id) as cTokenTransfer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ownedBy(): string | null {
    let value = this.get("ownedBy");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ownedBy(value: string | null) {
    if (value === null) {
      this.unset("ownedBy");
    } else {
      this.set("ownedBy", Value.fromString(value as string));
    }
  }

  get ctoken(): string | null {
    let value = this.get("ctoken");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ctoken(value: string | null) {
    if (value === null) {
      this.unset("ctoken");
    } else {
      this.set("ctoken", Value.fromString(value as string));
    }
  }

  get punk(): string | null {
    let value = this.get("punk");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set punk(value: string | null) {
    if (value === null) {
      this.unset("punk");
    } else {
      this.set("punk", Value.fromString(value as string));
    }
  }

  get transferedFrom(): Bytes {
    let value = this.get("transferedFrom");
    return value.toBytes();
  }

  set transferedFrom(value: Bytes) {
    this.set("transferedFrom", Value.fromBytes(value));
  }

  get transferedTo(): Bytes {
    let value = this.get("transferedTo");
    return value.toBytes();
  }

  set transferedTo(value: Bytes) {
    this.set("transferedTo", Value.fromBytes(value));
  }

  get amountTransfered(): BigInt {
    let value = this.get("amountTransfered");
    return value.toBigInt();
  }

  set amountTransfered(value: BigInt) {
    this.set("amountTransfered", Value.fromBigInt(value));
  }

  get transaction(): string | null {
    let value = this.get("transaction");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set transaction(value: string | null) {
    if (value === null) {
      this.unset("transaction");
    } else {
      this.set("transaction", Value.fromString(value as string));
    }
  }
}

export class CryptoPunkTransfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save CryptoPunkTransfer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save CryptoPunkTransfer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("CryptoPunkTransfer", id.toString(), this);
  }

  static load(id: string): CryptoPunkTransfer | null {
    return store.get("CryptoPunkTransfer", id) as CryptoPunkTransfer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ownedBy(): string | null {
    let value = this.get("ownedBy");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ownedBy(value: string | null) {
    if (value === null) {
      this.unset("ownedBy");
    } else {
      this.set("ownedBy", Value.fromString(value as string));
    }
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get receiver(): Bytes {
    let value = this.get("receiver");
    return value.toBytes();
  }

  set receiver(value: Bytes) {
    this.set("receiver", Value.fromBytes(value));
  }

  get punk(): BigInt {
    let value = this.get("punk");
    return value.toBigInt();
  }

  set punk(value: BigInt) {
    this.set("punk", Value.fromBigInt(value));
  }

  get transaction(): string | null {
    let value = this.get("transaction");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set transaction(value: string | null) {
    if (value === null) {
      this.unset("transaction");
    } else {
      this.set("transaction", Value.fromString(value as string));
    }
  }
}

export class Offer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Offer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Offer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Offer", id.toString(), this);
  }

  static load(id: string): Offer | null {
    return store.get("Offer", id) as Offer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get offeredByPunkBuyer(): string | null {
    let value = this.get("offeredByPunkBuyer");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set offeredByPunkBuyer(value: string | null) {
    if (value === null) {
      this.unset("offeredByPunkBuyer");
    } else {
      this.set("offeredByPunkBuyer", Value.fromString(value as string));
    }
  }

  get offeredByPunkHolder(): string | null {
    let value = this.get("offeredByPunkHolder");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set offeredByPunkHolder(value: string | null) {
    if (value === null) {
      this.unset("offeredByPunkHolder");
    } else {
      this.set("offeredByPunkHolder", Value.fromString(value as string));
    }
  }

  get offeredByAssignee(): string | null {
    let value = this.get("offeredByAssignee");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set offeredByAssignee(value: string | null) {
    if (value === null) {
      this.unset("offeredByAssignee");
    } else {
      this.set("offeredByAssignee", Value.fromString(value as string));
    }
  }

  get punk(): string | null {
    let value = this.get("punk");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set punk(value: string | null) {
    if (value === null) {
      this.unset("punk");
    } else {
      this.set("punk", Value.fromString(value as string));
    }
  }

  get amountOffered(): BigInt | null {
    let value = this.get("amountOffered");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amountOffered(value: BigInt | null) {
    if (value === null) {
      this.unset("amountOffered");
    } else {
      this.set("amountOffered", Value.fromBigInt(value as BigInt));
    }
  }

  get punkOfferedForSale(): BigInt {
    let value = this.get("punkOfferedForSale");
    return value.toBigInt();
  }

  set punkOfferedForSale(value: BigInt) {
    this.set("punkOfferedForSale", Value.fromBigInt(value));
  }

  get transaction(): string | null {
    let value = this.get("transaction");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set transaction(value: string | null) {
    if (value === null) {
      this.unset("transaction");
    } else {
      this.set("transaction", Value.fromString(value as string));
    }
  }
}

export class WithdrawnBid extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save WithdrawnBid entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save WithdrawnBid entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("WithdrawnBid", id.toString(), this);
  }

  static load(id: string): WithdrawnBid | null {
    return store.get("WithdrawnBid", id) as WithdrawnBid | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get withdrawnByOwner(): string | null {
    let value = this.get("withdrawnByOwner");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set withdrawnByOwner(value: string | null) {
    if (value === null) {
      this.unset("withdrawnByOwner");
    } else {
      this.set("withdrawnByOwner", Value.fromString(value as string));
    }
  }

  get withdrawnByAssignee(): string | null {
    let value = this.get("withdrawnByAssignee");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set withdrawnByAssignee(value: string | null) {
    if (value === null) {
      this.unset("withdrawnByAssignee");
    } else {
      this.set("withdrawnByAssignee", Value.fromString(value as string));
    }
  }

  get withdrawnBy(): Bytes | null {
    let value = this.get("withdrawnBy");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set withdrawnBy(value: Bytes | null) {
    if (value === null) {
      this.unset("withdrawnBy");
    } else {
      this.set("withdrawnBy", Value.fromBytes(value as Bytes));
    }
  }

  get punkIndex(): BigInt | null {
    let value = this.get("punkIndex");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set punkIndex(value: BigInt | null) {
    if (value === null) {
      this.unset("punkIndex");
    } else {
      this.set("punkIndex", Value.fromBigInt(value as BigInt));
    }
  }

  get amountWithdrawn(): BigInt | null {
    let value = this.get("amountWithdrawn");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amountWithdrawn(value: BigInt | null) {
    if (value === null) {
      this.unset("amountWithdrawn");
    } else {
      this.set("amountWithdrawn", Value.fromBigInt(value as BigInt));
    }
  }

  get punk(): string | null {
    let value = this.get("punk");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set punk(value: string | null) {
    if (value === null) {
      this.unset("punk");
    } else {
      this.set("punk", Value.fromString(value as string));
    }
  }

  get withdrawnBid(): string | null {
    let value = this.get("withdrawnBid");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set withdrawnBid(value: string | null) {
    if (value === null) {
      this.unset("withdrawnBid");
    } else {
      this.set("withdrawnBid", Value.fromString(value as string));
    }
  }

  get transaction(): string | null {
    let value = this.get("transaction");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set transaction(value: string | null) {
    if (value === null) {
      this.unset("transaction");
    } else {
      this.set("transaction", Value.fromString(value as string));
    }
  }
}

export class NotForSale extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save NotForSale entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save NotForSale entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("NotForSale", id.toString(), this);
  }

  static load(id: string): NotForSale | null {
    return store.get("NotForSale", id) as NotForSale | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get punkIndex(): BigInt {
    let value = this.get("punkIndex");
    return value.toBigInt();
  }

  set punkIndex(value: BigInt) {
    this.set("punkIndex", Value.fromBigInt(value));
  }

  get transaction(): string | null {
    let value = this.get("transaction");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set transaction(value: string | null) {
    if (value === null) {
      this.unset("transaction");
    } else {
      this.set("transaction", Value.fromString(value as string));
    }
  }
}
